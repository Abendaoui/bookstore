<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        /**  @var User $user   */
        $data['password'] = bcrypt($request->password);
        $data['is_admin'] = $request->is_admin ? $request->is_admin : false;
        $image = $request->profile;
        $imageName = time().'.'.$image->extension();
        $image->move(public_path('images/users'), $imageName);
        $data['profile'] = $imageName;
        $user = User::create($data);
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('token','user'));
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){
            return response([
               'message' => 'Invalid credentials.'
            ],422);
        }
        /**  @var User $user   */
        $user = Auth::user();

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('token','user'));
    }

    public function logout(Request $request)
    {
        /**  @var User $user   */
        $user = $request->user();

        $user->currentAccessToken()->delete();

        return response('',204);
    }
}
