<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Reviews;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreReviewsRequest;
use App\Http\Requests\UpdateReviewsRequest;

class ReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    function getReviews($book_id)
    {


        $reviews = Reviews::select('reviews.id', 'reviews.review', 'reviews.rating', 'reviews.created_at', 'users.name')
            ->join('books', 'reviews.book_id', '=', 'books.id')
            ->join('users', 'reviews.user_id', '=', 'users.id')
            ->where('books.slug', $book_id)
            ->orderBy('created_at','desc')
            ->get();



        return $reviews;

    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReviewsRequest $request)
    {
        $data = $request->validated();

        $book_slug = $request->book_id;
        $book = Book::where('slug', $book_slug)->first(); // Use first() instead of get()

        $data['user_id'] = Auth::id();
        $data['book_id'] = $book->id;
        Reviews::create($data);

        return 'success';
    }


    /**
     * Display the specified resource.
     */
    public function show(Reviews $reviews)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReviewsRequest $request, Reviews $reviews)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reviews $reviews)
    {
        //
    }
}
