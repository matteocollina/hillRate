<!DOCTYPE html>
<!--
    Matteo Collina 2016
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Hill Rate Plugin</title>
    </head>
    <body>
        <style>
            h1,h2{
                text-align: center;
            }
            div{
                text-align: center;
            }
            hr{
                margin: 50px 0;
            }
            p{
                font-size: 30px;
            }
            .col-2{
                float:left;
                width: 50%;
            }
        </style>
        
        <h1>1) Basic</h1>
        <h2>Without options</h2>
        <div class="rating-star-1"></div>    
        
        <hr>
        
        <h1>2) Half Stars</h1>
        <h2>The first star has only one value, and others have half values</h2>
        <div class="rating-star-2"></div>  
        
        <hr>
        
        <h1>3) Custom Stars</h1>
        <h2>The last star has a different style</h2>
        <div class="rating-star-3"></div> 
        
        <hr>
        
        <h1>4) Title Stars</h1>
        <h2>Each star has a title</h2>
        <div class="rating-star-4"></div>
        
        
        <hr>
        
        <div class='col-2'>
            <h1>5) Print Selected Value & Responsive</h1>
            <h2>Prints value of star selected</h2>
            <div class="rating-star-5" data-value='20'></div>
        </div>
        <div class='col-2'>
            <h1>6) Print Selected Value & Responsive</h1>
            <h2>Prints value of star selected</h2>
            <div class="rating-star-6"></div>
        </div>
        
        <hr>
        
        <h1>7) Complete </h1>
        <h2>An example with all options and change of state for custom star</h2>
        <div class="rating-star-7"></div>    

    </body>
    <footer>
        <!-- JS -->
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
        <script type="text/javascript" src="../plugin/js/hillRate-jquery.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
    </footer>
</html>
