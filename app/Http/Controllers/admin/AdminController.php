<?php

namespace App\Http\Controllers\admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\admin\Admin;

class AdminController extends Controller
{
    public function index(Request $req)
    { 
        $admin_row = $req->session()->get('adminDetails');
        if(empty($admin_row))
        {
            return view('admin.login'); 
        }
        else
        {
            return redirect('admin/dashboard');  
        }
            
    }
    public function verify(Request $req)  
    {
        /*$data = DB::table('tbl_admin')
                ->where('email','admin@gmail.com')
                ->get();*/
    
        $email=$req->email;
        $password=md5($req->password);
        $result = Admin::where('email',$email)->where('password',$password)->first();
 
        if(!empty($result))
        {
            $req->session()->put('adminDetails',$result);
            //Session::put('adminDetails', $result);
            //session(['adminDetails' => $result]);
            //$req->session()->put('adminDetails',$result);
            // $value = session('adminDetails'); 
            // $value = $req->session()->get('adminDetails');
            // dd($value);
           
            return redirect('admin/dashboard')->with('success','You are successfully logged.');
        } 
        else   
        {
            //return redirect('/');
            return redirect('/')->with('error','Register email or password dose not match.');
        }
    

    }
    public function changePassword()
    {
        return view('admin.change_pass.change_pass');
    }

    public function changePasswordVerify(Request $req)
    {
        $admin_row = $req->session()->get('adminDetails');
        if(empty($admin_row))
        {
            return redirect('/');
        }
        else
        {
            $current_password=md5($req->current_password);
            $password=md5($req->password);
            $old_password=$admin_row->password;
            $uniqcode=$admin_row->uniqcode;  
            
            if($old_password==$current_password)
            {
                if($password!=$current_password)
                {
                    $update = Admin::where('uniqcode',$uniqcode)->update([
                        'password' => $password
                     ]);
                    if($update)
                    {
                        $req->session()->forget('adminDetails');
                        $result = Admin::where('uniqcode',$uniqcode)->first();
                        $req->session()->put('adminDetails',$result);
                        return redirect('admin/changepassword');
                    }
                    else
                    {
                        echo "some problem";
                    }
                     
                }
                else
                {
                    echo "not match";
                }
            }
            else
            {
                echo "not match";
            }
        } 
    }

    public function logout(Request $req)
    {
        $req->session()->forget('adminDetails');
        return redirect('/');
    }


}
