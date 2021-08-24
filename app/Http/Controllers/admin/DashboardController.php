<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Session;
class DashboardController extends Controller
{
    public function __construct(Request $req)
    {
        
        
    }
    public function index(Request $req)
    { 
        $admin_row = $req->session()->get('adminDetails');
        if(empty($admin_row))
        {
            return redirect('/');
        }
        else
        {
            return view('admin.dashboard.dashboard');  
        }   
    }
}  
