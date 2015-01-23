# Brainless
##A collection of .less utilities and conveniences.

> Brainless provides you with a number of grouped mixins to accelerate rapid .css development.  

## Design philosophy  
This is not intended to be a catch-call framework for css development. Instead there are a small number of [namespaced](http://lesscss.org/features/#features-overview-feature-namespaces-and-accessors) mixin collections that provide basic conveniences.

## Usage
Install via [bower](http://bower.io/)
```bash
bower install brainless
```

Import into your .less file
```less
@import (less) 'bower_components/brainless/src/brainless.less'
```

## What's Included   

> The mixins are organized into 9 major groups

* **[#animation](#animation)** : shorthands for managing keyframe animations  
* **[#center](#center)** *_center.less* transform-based centering conveniences
* **#container** *_container.less* easily create horizontal and vertical layout containers.
* **#flexbox** *_flexbox.less* conveniences for flexible box model layouts
* **[#relative #absolute #fixed & #sticky](#position)** *_position.less* positioning conveniences  
* **[#reset](#reset)** *_reset.less* quickly set a css property back to its default value.  
* **#transform** *_transform.less* conveniences to manage complex css transforms  
* **[#transition](#transition)** *_transition.less* conveniences to manage css transitions  
* **[#util](#util)** *_util.less* common css utility mixins for element sizing and clearfixing  

```bash
src/
├── _animation.less
├── _center.less
├── _container.less
├── _flexbox.less
├── _position.less
├── _reset.less
├── _transform.less
├── _transition.less
├── _util.less
└── brainless.less
``` 

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

###Transition
**Examples**
```less
// basic example
.box{
  #transition > .property(opacity);
  #transtion > .duration(1s);
  #transtion > .delay(0.5s);
}

// supports multiple properties
.multiples{
  #transition > .property(opacity);
  #transtion > .duration(2s);
  #transtion > .delay(5s);

  #transition > .property(background-color);
  #transtion > .duration(1s);
  #transtion > .delay(0.5s);
}

// css output
.multiples{
  -webkit-transition-property: opacity, background-color;
  transition-property: opacity, background-color;
  -webkit-transition-delay: 2s, 1s;
  transition-delay: 2s, 1s;
  -webkit-transition-duration: 5s, 0.5s;
  transition-duration: 5s, 0.5s;
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
