# Brainless
##A collection of .less utilities and conveniences.

> Brainless provides you with a number of grouped mixins to accelerate rapid .css development.  

### Design philosophy  
This is not intended to be a catch-call framework for css development. Instead there are 9 [namespaced](http://lesscss.org/features/#features-overview-feature-namespaces-and-accessors) mixin collections that provide basic conveniences.

### The mixins are organized into 9 namespaces  
* **#animation** ___animation.less__ shorthands for managing keyframe animations  
* **#center** ___center.less__ transform-based centering conveniences
* **_container.less** easily create horizontal and vertical layout containers.
* **_flexbox.less** conveniences for flexible box model layouts
* **_position.less** positioning conveniences for `postion: absolute|fixed|relative|static`  
* **_reset.less** quickly set a css property back to its default value.  
* **_transform.less** conveniences to manage complex css transforms  
* **_transition.less** conveniences to manage css transitions  
* **_util.less** common css utility mixins for element sizing and clearfixing  

####Animation  

**Example**  
```
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

####Center  