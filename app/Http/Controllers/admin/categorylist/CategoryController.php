<?php
namespace App\Http\Controllers\admin\categorylist;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\categoryList\CategoryModel;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
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
            $data = CategoryModel::all()->where('status','Active');   
           // $users = DB::table('tbl_category')->get();
            // echo '<pre>';
            // print_r($data);
            // die;
            return view('admin.category.category',compact('data'));  
        }   
    }
    public function save(Request $req)
    {
     //   $category_name=$req->category_name;
        // $return_data=DB::table('tbl_category')
        //                 ->where('category_name',$category_name)
        //                 ->get();
        // dd($return_data);
        // if(empty($return_data))
        // {

        // }
        // else
        // {
            
        // }
        if($req->file()) 
        {
           // $images = time().'_'.$req->image->getClientOriginalName();
            //$filePath = $req->file('image')->storeAs('webroot/adminimages/category/', $images, 'public');
            
            
            $random = Str::random(30);
            $data = $req->input();
				$student = new CategoryModel;
                $student->uniqcode = $random;
                $student->category_name = $req->category_name; //$data['category_name'];
                $student->image = $req->file('image')->store('public/webroot/adminimages/category');
				$student->save();

            return redirect('/admin/category');
        }
        
    }
}
