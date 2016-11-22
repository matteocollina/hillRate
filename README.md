# hillRate
Easy Rating Plugin


-stars: Number of stars 

-imageStar: Custom Image of stars  :
            - default : path img empty star
            - half: path img half star
            - full : path img full star

-imageStarOnIndex:  You can specify custom image for index (start: index=0) 
            - "state_unselected" you can declare state when is not selected (default,half,full), otherwise it's full.

-valuesStar: 2 values => half star / 1 value => full star

-showSelectedValue: bool that show value selected or not

-titleStar: title of  each star value - Need to correspond to values structure : if you don't want titles, don't add this option

-nameInput: attribute name of input

-responsive: default false


    $('.rating-star').hillRate({  
        stars : 6, 
        imageStar: {"default":'img/star-empty-gold.png',"full":"img/star-full-gold.png","half":"img/star-half-gold.png"} ,
        imageStarOnIndex: [{"index":0,"default":'img/star-empty.png',"full":"img/star-full.png","half":"img/star-half.png","state_unselected":"default"}], 
        valuesStar : [0,[1,2],[3,4],[5,6],[7,8],[9,10]],  
        titleStar: [["Insufficient"],["Almoust Enough","Enough"],["More than enough","Good"],["More than good","Cool"],["extraordinary","Excellent"],["Incredible","WOW!!!"]], 
        nameInput: "rating",
        responsive: true 
    });


![alt tag](https://s-media-cache-ak0.pinimg.com/originals/d5/5f/4c/d55f4c460274d31b9875926331545c63.png)
