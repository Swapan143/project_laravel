<?php

namespace App\Http\Controllers\admin\categorylist;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubcategoryController extends Controller
{
    public function index(Request $req)
    { 
        $admin_row = $req->session()->get('adminDetails');
        if(empty($admin_row))
        {
            return redirect('/');
        }
        else
        {
            return view('admin.subcategory.subcategorylist');  
        }   
    }
    public function viewsubcategory()
    {
        return view('admin/subcategory/subcategoryadd');
    }
}
