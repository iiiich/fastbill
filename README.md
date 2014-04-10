![image_squidhome@2x.png](http://konexmedia.com/logo.png)

# fastbill

Provides easy access to `fastbill-api`

This module is an early implementation of some features of the fastbill-api. Please let me know if you need some improvements.

Causing the very early dev-status, don't be angry, I'll improve this peace of code in the next weeks


### Installation

To install this adapter, run:

```sh
$ npm fastbill
```

### Usage

This Module exposes the following methods:

###### `get()`
```js
var fastbill = new Fastbill({
      user : '####',
      password : '####'
  });

fastbill.get("customer",{"FILTER": {}, LIMIT: 2},function(res){
  console.log(res);
});
```
###### `create()`

+ **Status**
  + Planned

###### `update()`

+ **Status**
  + Planned

###### `delete()`

+ **Status**
  + Planned



### Interfaces

>TODO:
>Support all functions of the original API

### License

The MIT License (MIT)

Copyright (c) 2014 Robert Boeing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

