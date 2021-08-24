@extends('admin.layout.layout')
  
@section('content')
<div class="row">   
        <div class="col-lg-12">
            <div class="ibox float-e-margins">    
                <div class="ibox-content">
                    <div class="row">  
                        <div id="edit_data">
                            <div class="col-sm-12 b-r">    
                                <h2> Sub Category</h2><br>
                                                     
                                    <form role="form" id="category_data" action="" method="post" enctype="multipart/form-data">
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
                                                        <label>Category Name</label>
                                                        <select class="form-control" name="category_name" id="  category_name">
                                                            <option value="" selected="selected" disabled="disabled">Select Category</option>
                                                
                                                        
                                                            <option value="1">jbkvn</option>
                                                            <option value="1">jbkvn</option>
                                                        </select>  
                                                            
                                                    </div>
                                                    
                                                         
                                                           
                                                    </div>

                                                
                                                    <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label>Subcategory Name</label>
                                                        <input type="text" name="subcategory_name" id="subcategory_name" class="form-control only_character validate[required]" data-errormessage-value-missing="Category is required" data-prompt-position="bottomLeft" placeholder="Enter name" maxlength="200">     
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
                        
                    </div>
                </div>
            </div>
            @endsection