<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AssetController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Route to serve private assets (like .riv files)
Route::get('/assets/{filename}', [AssetController::class, 'serve'])
    ->where('filename', '[a-zA-Z0-9._-]+')
    ->name('assets.serve');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
