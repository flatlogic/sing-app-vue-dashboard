<?php sleep(10) ?>
<h3 class="text-center no-margin animated bounceInDown">Sign up, <del>it's <strong>free</strong></del> and get <strong>$50 now!</strong></h3>
<p class="lead text-muted text-center">
    Faith makes it possible to achieve that which man's mind can conceive and believe.
</p>
<form>

    <div class="form-group">
        <label for="exampleInputEmail1"><i class="fa fa-circle text-warning"></i> &nbsp; Email address</label>
        <input type="email" class="form-control input-transparent" id="exampleInputEmail1"
               placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="pswd"><i class="fa fa-circle text-danger"></i> &nbsp; Password</label>
        <input class="form-control" id="pswd" type="text" placeholder="Min 8 characters">
    </div>
    <p>
        To make a widget automatically load it's content you just need to set
        <strong>data-widgster-autoload</strong> attribute and provide an url.
    </p>
    <pre><code>data-widgster-load="server/ajax_widget.php"
data-widgster-autoload="true"</code></pre>
    <p>
        <strong>data-widgster-autoload</strong> may be set to an integer value. If set, for example, to
    2000 will refresh widget every 2 seconds.
    </p>
    <div class="clearfix">
        <div class="btn-toolbar float-right">
            <button type="submit" class="btn btn-transparent">Cancel</button>
            <button type="submit" class="btn btn-success animated wobble">&nbsp;Submit&nbsp;</button>
        </div>
    </div>
</form>
