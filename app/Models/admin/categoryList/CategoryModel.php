<?php

namespace App\Models\admin\categoryList;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    
    protected $table = 'tbl_category';  
    use HasFactory;
    protected $fillable = [
        'uniqcode', 'category_name', 'image',
    ];
}
