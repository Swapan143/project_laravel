@extends('admin.layout.layout')
  
@section('content')

<div class="row">   
        <div class="col-lg-12">
            <div class="ibox float-e-margins">    
                <div class="ibox-content">
                    <div class="row">
                        <div id="edit_data">
                            <div class="col-sm-12 b-r"> 
                                <h2>Category</h2><br>            
                                    <form role="form" id="category_data" action="{{ url('admin/categorySave') }}" method="post" enctype="multipart/form-data">
                                        @csrf    
                                            <div class="row">
                                                 <div class="col-lg-12 text-center">
                                                    <div class="form-group"> 
                                                       <img src="{{ URL::asset('webroot') }}/admin/images/add-Photo-Button.png" id="upload_logo" onclick="get_upload_logo()" class="add_img_button">
                                                        <input type="file" class="image-upload select_image" name="image" class="validate[required]" id="logo_input_upload" style="display: none" accept=".jpg,.jpeg,.png" onchange="logo_show_photo(this)">
                                                        <span id="pan_img_error" class="formErrorContent formErrorArrowBottom1" style="display: none; top: 112px !important;left: 16px !important"></span>    
                                                    </div>   
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label>Name</label>
                                                        <input type="text" name="category_name" id="category_name" class="form-control only_character validate[required]" data-errormessage-value-missing="Category is required" data-prompt-position="bottomLeft" placeholder="Enter name" maxlength="200">     
                                                    </div> 
                                                </div>     
                                            </div>
                                            <div class="col-sm-12">                    
                                                <button class="btn btn-warning btn-primary pull-right m-t-n-xs grediant-btn" type="reset"><strong>Cancel</strong></button>                                                            
                                                <button class="btn btn-primary pull-right m-t-n-xs grediant-btn"  type="submit" style="margin-right: 6px;" id="change_password"><strong>Save</strong></button>
                                            </div>
                                        </form>
                                    </div>                              
                                </div>
                            </div>    
                        </div>
                        <div class="ibox-content">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover dataTables-example" >
                                <thead>
                                    <tr>
                                        <th>Index</th>
                                        <th>Category Name</th>
                                        <th>Category Image</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>   
                                <tbody>
                                @foreach ($data as $key => $value)
                                <tr>
                                <td>{{ $key+1}}</td>
                                    <td>{{$value->category_name}}</td>
                                    <td><img src="{{ Storage::url($value->image) }}" height="75" width="75" class="showTableImage"> </td>
                                    <td> 
                                        <input type="checkbox" class="js-switch" onchange="common_status_change(this.value)" id="status" value="" />
                                   </td>
                                    <td>
                                        <a href=""><i class="fa fa-pencil-square action"></i></a>
                                        <a href="" onclick="return confirm('Are you sure delete this category?')"><i class="fa fa-trash action"></i></a>
                                    </td>
                                    </tr>
                                </tbody>
                                @endforeach   
                                </table>
                            </div>
                         </div>
                    </div>
                </div>
            </div>    
    @endsection

            