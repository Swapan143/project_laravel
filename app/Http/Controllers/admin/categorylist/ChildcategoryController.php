<?php

namespace App\Http\Controllers\admin\categorylist;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChildcategoryController extends Controller
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
            return view('admin.childcategory.childcategorylist');  
        }   
    }
    public function viewchildcategory()
    {
        return view('admin/childcategory/childcategoryadd');
    }
}
