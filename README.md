#  mofron-comp-slideshare
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

embeded slideshare component for mofron

it can embeded slide to your page.

usage is the same as official information, but it needs to replace  "iframe" and this component tag.


# Install
```
npm install mofron  mofron-comp-slideshare
```

# Sample
```html
<require>
    <tag module="mofron-comp-slideshare">SlideShare</tag>
</require>

<SlideShare name=slide_mod src="//www.slideshare.net/slideshow/embed_code/key/FEMhsyd6vq2yTt" width="400" height="300" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border-width:1px;max-width:100%;" visible=false></SlideShare>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| ◯  | src | string | slide url |
| | width | number | slide width |
| | | option | style option |
| | height | string | slide height |
| | | option | style option |
| | frameborder | string | iframe border type |
| | marginwidth | string | margin width |
| | marginheight | string | margin height |
| | scrolling | string | scrolling type |

