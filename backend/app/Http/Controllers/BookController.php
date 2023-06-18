<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Support\Str;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Http\Resources\BookResource;
use App\Models\Categories;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::orderBy('published_date','desc')->take(15)->get();

        return response()->json($books);
    }

    public function booksByAuthor(string $author)
    {
        $books = Book::select('books.*', 'authors.name AS author_name', 'authors.bio', 'authors.profile')
            ->join('authors', 'authors.id', '=', 'books.author_id')
            ->where('authors.name', $author)
            ->get();
        $data = [
            'books' => $books,
        ];
        return $data;
    }


    public function booksByCategory(string $category)
    {
        $books = Book::select('books.*','authors.name','categories.image')
        ->join('categories','categories.id','books.category_id')
        ->join('authors','authors.id','books.author_id')
        ->where('categories.name',$category)
        ->get();
        $data = [
            'categories' => $books
        ];
        return $data;
    }

    function getSearchBooks($book = null)
    {
        $query = Book::query();
        if ($book) {
            $query->where('title', 'like', '%' . $book . '%');
        }
        $books = $query->paginate(16);

        return $books;
    }

    public function getRandomBooks()
    {
        $books = Book::inRandomOrder()->paginate(4);

        return $books;
    }

    public function getLatestBooks()
    {
        $books = Book::orderBy('published_date', 'desc')
            ->paginate(10);

        return $books;
    }

    public function getArabicBooks()
    {
        $books = Book::where('language', 'arabic')
        ->paginate(10);


        return $books;
    }

    public function getKidsBooks()
    {
        $books = Book::join('categories', 'books.category_id', '=', 'categories.id')
        ->where('categories.name', 'kids')
        ->paginate(10);


        return $books;
    }

    public function getAdultsBooks()
    {
        $books = Book::join('categories', 'books.category_id', '=', 'categories.id')
        ->where('categories.name', 'adults')
        ->paginate(10);


        return $books;
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $data = $request->validated();
        $image = $request->cover;
        $imageName = time().'.'.$image->extension();
        $image->move(public_path('images/books'), $imageName);
        $data['cover'] = $imageName;
        Book::create([
            'title' =>$request->title,
            'author_id' =>$request->author_id,
            'category_id' =>$request->category_id,
            'slug' => Str::slug($request->title),
            'language' => $request->language,
            'description' =>$request->description,
            'cover' => $imageName,
            'price' => $request->price,
            'nb_pages' => $request->nb_pages,
            'published_date' => $request->published_date,
            'stock' => $request->stock
        ]);
        return response()->json([
            'msg' => 'Book created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        return response()->json([
            'book' => Book::select('books.*', 'categories.name as category_name', 'authors.name as author_name')
                    ->join('categories', 'books.category_id', '=', 'categories.id')
                    ->join('authors', 'books.author_id', '=', 'authors.id')
                    ->where('slug',$slug)
                    ->first()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();

        return 'success';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function getBooks(Request $request,$target = null)
    {
        $displayCount = $request->input('displayCount', 8);
        $query = Book::query();
        if ($target) {
            $query->where('title', 'like', '%' . $target . '%');
        }
        $books = BookResource::collection($query->paginate($displayCount));

        return $books;
    }

    public function getRecentBooks()
    {
        return BookResource::collection(Book::orderByDesc('id')->paginate(6));

    }
}
