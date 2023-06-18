<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
use App\Http\Resources\CartResource;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //  Cart::orderBy('created_at','desc')->groupBy('book_id')->where('user_id',Auth::id())->get();
        $carts = Cart::select('carts.*', 'books.title','books.cover','books.price','authors.name')
                    ->join('books', 'carts.book_id', '=', 'books.id')
                    ->join('authors', 'books.author_id', '=', 'authors.id')
                    ->where('carts.user_id',Auth::id())
                    ->get();
        return $carts;
    }

    public function getTotalPrice()
    {
            $carts = Cart::select('carts.quantity','books.price',)
                    ->join('books', 'carts.book_id', '=', 'books.id')
                    ->where('user_id',Auth::id())->get();
            $totalPrice = 0;
            foreach ($carts as $cart) {
                $totalPrice += $cart->quantity * $cart->price;
            }
            return $totalPrice;
    }
    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartRequest $request)
    {
        $data = $request->validated();
        $cartItem = Cart::where('user_id', Auth::id())
                        ->where('book_id', $request->book_id)
                        ->first();

        if (!$cartItem) {
            $data['user_id'] = Auth::id();
            Cart::create($data);
        } else {
            $cartItem->increment('quantity');
        }
        return response()->json([
            'msg' => 'success'
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartRequest $request, Cart $cart)
    {
        //
    }

    public function add($id)
    {
        $cart = Cart::find($id);
        $cart->increment('quantity');
        return response()->json([
            'msg' =>'success',
        ]);

    }

    public function minus($id)
    {
        $cart = Cart::find($id);

        if($cart->quantity > 1){
            $cart->decrement('quantity');
        }else{
            $cart->delete();
        }
        return response()->json([
            'msg' =>'success',
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        $cart->delete();
        return response()->json([
            'msg' =>'success',
        ]);
    }


    public function getCartCount()
    {
        $count = Cart::where('user_id',Auth::id())->count();
        return $count;
    }

    public function removeAllCart()
    {
        Cart::where('user_id',Auth::id())->delete();

        return response()->json([
            'msg' =>'success',
        ]);
    }
}
