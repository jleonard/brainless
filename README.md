# Brainless
##A collection of .less utilities and conveniences.

> Brainless provides you with a number of grouped mixins to accelerate rapid .css development.  

## Design philosophy  
This is not intended to be a catch-call framework for css development. Instead there are a small number of [namespaced](http://lesscss.org/features/#features-overview-feature-namespaces-and-accessors) mixin collections that provide basic conveniences.

## What's Included  

> The mixins are organized into 9 namespaces  

* **#animation** : shorthands for managing keyframe animations  
* **#center** __center.less_ transform-based centering conveniences
* **#container** *_container.less* easily create horizontal and vertical layout containers.
* **_flexbox.less** conveniences for flexible box model layouts
* **#relative #absolute #fixed & #sticky** *_position.less* positioning conveniences  
* **#reset** *_reset.less* quickly set a css property back to its default value.  
* **_transform.less** conveniences to manage complex css transforms  
* **_transition.less** conveniences to manage css transitions  
* **#util** *_util.less* common css utility mixins for element sizing and clearfixing  

###Animation  

**Examples**  
```less
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    } 
  }

  .box{
    #animation > .name(pulse);
    #animation > .easing(ease-in);
    #animation > .duration(2s);
    #animation > .delay(0.5s);
    #animation > .loop();
    &:hover{
      #animation > .pause();
    }
  }

```

###Center  

**Examples**  
```less
  .box-x{
    #center > .x();
  }

  .box-y{
    #center > .y();
  }

  .box-xy{
    #center > .xy();
  }

  // elements are positioned absolute by default
  // optionally, pass in a position attribute
  .box-fixed{
    #center > .xy(fixed);
  }

```

###Position  
**Examples** 
```less

  .box{
    #absolute > .top-left();
  }

  // css output
  .box{ 
    position: absolute; 
    top: 0; 
    left: 0; 
  }

  .box{
    #absolute > .top-left(50%,50%);
  }

  // css output
  .box{ 
    position: absolute; 
    top: 50%; 
    left: 50%; 
  }

  .box{
    #fixed > .top(20px);
  }

  // css output
  .box{
    position: fixed;
    top: 20px;
  }
```  

###Reset  
**Examples**  
```less
// First, a position mixin
.box{
  #absolute > .top-left();
}
// Now, a reset for top and left before repositioning the element
.box.bottom{
  #reset > ._(top);
  #reset > ._(left);
  #absolute > .bottom-right();
}

// css output
.box{
  position: absolute;
  top: 0;
  left: 0;
}
.box.bottom{
  top: auto;
  left: auto;
  bottom: 0;
  right: 0;
}
```  

###Util  
**Examples**  
```less
// classic clearfix
.box{
  #util > .clearfix();
}

// sizing convenience
.size{
  #util > .size(200px,120px);
}

//css output
.size{
  width: 200px;
  height: 120px;
}

.square{
  #util > .square(200px);
}

//css output
.square{
  width: 200px;
  height: 200px;
}
```
