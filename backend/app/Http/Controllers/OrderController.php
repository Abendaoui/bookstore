<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Returns;
use App\Models\Delivery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\OrderResource;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::orderBy('order_date','desc')
        ->where('user_id',Auth::id())->get();

        return OrderResource::collection($orders);
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::id();
        $data['order_date'] = date('Y-m-d H:i:s');
        $ordered_products = Cart::select('books.title')
                    ->join('books', 'carts.book_id', '=', 'books.id')
                    ->where('carts.user_id',Auth::id())
                    ->get();
        $all = '';
        foreach($ordered_products as $product){
            $all .= $product->title;
        }
        $data['ordered_products'] = $all;
        $order = Order::create($data);
        if($order){
            Cart::where('user_id',Auth::id())->delete();
        }
        return response()->json([
            'msg' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        return $order;
    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        $request->validated();
        $status = $request->status;
        if($status === "shipped"){
            Delivery::create([
                'order_id' => $order->id,
                'delivery_method' => $order->method,
                'delivery_status' => 'Send To Delivery Company',
                'delivery_address' => $order->address,
                'delivery_date' => date('Y-m-d H:i:s'),
                'city' => $order->address
            ]);
        }
        if($status === "returned"){
            Returns::create([
                'order_id' => $order->id,
                'user_id' => Auth::id(),
                'return_date' => date('Y-m-d H:i:s'),
                'reason' => $request->reason,
                'notes' => $request->notes
            ]);
        }
        if($status === 'canceled' || $status === 'returned'){
            $target = Delivery::where('order_id', $order->id);
            $target->update([
                'delivery_status' => $status
            ]);
        }
        $order->update([
            'status' => $request->status
        ]);
        return 'success';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $x = $order->delete();
        if($x){
            return "Success";
        }else{
            return "Fail";
        }
    }
    public function getRecentOrder()
    {
        return OrderResource::collection(Order::orderByDesc('id')->paginate(5));

    }
    public function getOrder(Request $request,$status = null, $customer = null)
    {
        $displayCount = $request->input('displayCount', 8);
        $query = Order::query();
        $query->orderBy('order_date','desc');
        if ($status !== 'all') {
            $query->where('status', $status);
        }

        if ($customer) {
            $query->where('full_name', 'like', '%' . $customer . '%');
        }

        $orders = OrderResource::collection($query->paginate($displayCount));

        return $orders;
    }

    public function gettransactions(Request $request, $customer = null)
    {
        $displayCount = $request->input('displayCount', 8);
        $query = Order::query();
        $query->where('status','delivered')->orderBy('order_date','desc');
        if ($customer) {
            $query->where('full_name', 'like', '%' . $customer . '%');
        }

        $orders = OrderResource::collection($query->paginate($displayCount));

        return $orders;
    }

    public function getTotalSales()
    {
        $currentMonth = Carbon::now()->format('Y-m');
        $totalPrice = Order::where('status', 'delivered')
        ->sum('total_price');
        return $totalPrice;
    }
    // Get Total Amount Sales for Month
    public function getTotalSalesCurrMonth()
    {
        $currentMonth = Carbon::now()->format('Y-m');
        $totalPrice = Order::where('status', 'delivered')
        ->whereRaw("DATE_FORMAT(order_date, '%Y-%m') = ?", [$currentMonth])
        ->sum('total_price');
        return $totalPrice;
    }

    public function getTotalSalesPrevMonth()
    {
        $previousMonth = Carbon::now()->subMonth()->format('Y-m');

        $totalPrice = Order::where('status', 'delivered')
        ->whereRaw("DATE_FORMAT(order_date, '%Y-%m') = ?", [$previousMonth])
        ->sum('total_price');

        return $totalPrice;
    }

    public function compareTotalSales()
    {
        $currentMonthSales = $this->getTotalSalesCurrMonth();
        $previousMonthSales = $this->getTotalSalesPrevMonth();
        $total = $this->getTotalSales();

        $difference = $currentMonthSales - $previousMonthSales;
        $percentageChange = 0;

        if ($previousMonthSales != 0) {
            $percentageChange = ($difference / $previousMonthSales) * 100;
        }

        return [
            'percentage_change' => $percentageChange,
            'total' => $total
        ];
    }


    public function currOrderTotal()
    {
        $currentMonth = Carbon::now()->format('Y-m');
        $totalPrice = Order::whereRaw("DATE_FORMAT(order_date, '%Y-%m') = ?", [$currentMonth])
        ->count();
        return $totalPrice;
    }

    public function prevOrderTotal()
    {
        $previousMonth = Carbon::now()->subMonth()->format('Y-m');
        $totalPrice = Order::whereRaw("DATE_FORMAT(order_date, '%Y-%m') = ?", [$previousMonth])
        ->count();
        return $totalPrice;
    }

    public function compareOrderTotal()
    {
        $currOrderTotal = $this->currOrderTotal();
        $prevOrderTotal = $this->prevOrderTotal();

        $difference = $currOrderTotal - $prevOrderTotal;
        $percentageChange = 0;

        if ($prevOrderTotal != 0) {
            $percentageChange = ($difference / $prevOrderTotal) * 100;
        }
        return [
            'total' => Order::count(),
            'percentage_change' => $percentageChange
        ];
    }

    public function compareOrdersDelivered()
    {
        // Retrieve data for orders and delivered orders
        // $orders = Order::where('status', '!=', 'cancelled')->count();
        // $deliveredOrders = Order::where('status', 'delivered')->count();

        // // Return the data as a response
        // $data = [
        //     'orders' => $orders,
        //     'deliveredOrders' => $deliveredOrders,
        // ];
        // return $data;
        $orders = Order::select(Order::raw('MONTH(created_at) AS month'), Order::raw('COUNT(*) AS total_orders'))
            ->groupBy('month')
            ->get();

        $deliveredOrders = Order::select(Order::raw('MONTH(created_at) AS month'), Order::raw('COUNT(*) AS total_delivered_orders'))
            ->where('status', 'delivered')
            ->groupBy('month')
            ->get();

        $data = [];
        foreach ($orders as $order) {
            $month = date("M", mktime(0, 0, 0, $order->month, 1));
            $data[] = [
                'name' => $month,
                'Orders' => $order->total_orders,
                'DeliveredOrders' => 0, // Default value for delivered orders
            ];
        }

        foreach ($deliveredOrders as $deliveredOrder) {
            $month = date("M", mktime(0, 0, 0, $deliveredOrder->month, 1));
            $index = array_search($month, array_column($data, 'name'));
            if ($index !== false) {
                $data[$index]['DeliveredOrders'] = $deliveredOrder->total_delivered_orders;
            }
        }

        return $data;
    }


}
