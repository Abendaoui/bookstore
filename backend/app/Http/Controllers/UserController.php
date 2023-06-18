<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $image = $request->profile;
        $imageName = time().'.'.$image->extension();
        $image->move(public_path('images/users'), $imageName);
        $data['profile'] = $imageName;
        User::create([
            'name' =>$request->name,
            'email' =>$request->email,
            'password' => bcrypt($request->password),
            'profile' => $imageName,
            'address' =>$request->address,
            'phone' => $request->phone,
            'role' => $request->role,
            'is_admin' => 1
        ]);
        return response()->json([
            'msg' => 'Employee created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'role' => $request->role,
            'phone' => $request->phone,
        ]);

        return response()->json([
            'msg' => 'Employee Updated successfully'
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'msg' => 'Employee Deleted successfully'
        ]);
    }
    /**
     * Get All Users
    */
    public function getAllUsers(Request $request, $customer = null)
    {
        $displayCount = $request->input('displayCount', 8);
        $query = User::query();
        $query->where('is_admin', 0);
        if ($customer) {
            $query->where('name', 'like', '%' . $customer . '%');
        }
        $users = UserResource::collection($query->paginate($displayCount));

        return $users;
    }
    /**
     * Get All Admins
    */
    public function getAllAdmins(Request $request, $customer = null)
    {
        $displayCount = $request->input('displayCount', 8);
        $query = User::query();
        $query->where('is_admin', 1);
        if ($customer) {
            $query->where('name', 'like', '%' . $customer . '%');
        }
        $users = UserResource::collection($query->paginate($displayCount));

        return $users;

    }

    public function getUsersCount()
    {
        $adminCount = User::where('is_admin', 0)->count();
        return $adminCount;
    }
    public function currMonthUser()
    {
        $currentMonth = Carbon::now()->format('Y-m');

        $userCount = User::where('is_admin', 0)
        ->whereRaw("DATE_FORMAT(created_at, '%Y-%m') = ?", [$currentMonth])
        ->count();

        return $userCount;
    }

    public function prevMonthUser()
    {
        $prevMonth = Carbon::now()->subMonth()->format('Y-m');

        $userCount = User::where('is_admin', 0)
        ->whereRaw("DATE_FORMAT(created_at, '%Y-%m') = ?", [$prevMonth])
        ->count();

        return $userCount;
    }

    public function compareUsers()
    {
        $currentMonthUser = $this->currMonthUser();
        $previousMonthUser = $this->prevMonthUser();
        $total = $this->getUsersCount();

        $difference = $currentMonthUser - $previousMonthUser;
        $percentageChange = 0;

        if ($previousMonthUser != 0) {
            $percentageChange = ($difference / $previousMonthUser) * 100;
        }

        return [
            'total' => $total,
            'percentage_change' => $percentageChange
        ];
    }




}
