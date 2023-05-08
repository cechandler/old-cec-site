---
layout: page
title: Tools
---

<!-- My research in music technology is inherently tied to my compositional work. Through my use of Max/MSP and SuperCollider, I create compositional and analytical tools that serve the needs of my creative projects.  -->

Below you can find a selection of recent tools that I have developed for compositional and analytical projects. Some of these are still in active development, so be aware there may be bugs or idiosyncrasies in functionality. There are links to download some of the tools, and all that I ask is that you let me know if you find them useful and please give attribution if you repurpose some of my work in your own. Please be in touch if you find any bugs.

<h2 class="my-3">Generative Sound File Player</h2>

<img src="{{ site.baseurl }}/assets/img/gsfp1.png" class="img-fluid" alt="Screenshot of GSFP">

The Generative Sound File Player is my most recent tool that allows for the algorithmic sound file playback with controls for real-time manipulation. One can load up and sequence any number of sound files using a variety of parameters, which you can see on the interface screenshot above. In this screenshot and the video demo below, there are two independent voices that can be triggered. But an arbitrary number of separate voices is possible, constrained only by the processing power of the computer it is running on. The controls to interact with the GSFP are currently only text-based but the organization of the software allows for easy implementation of graphic control (through user interface objects or touch-based controllers) in the near future.

<div class="col-12 mb-4 text-center">
  <a href="#" class="btn btn-outline-secondary">Download</a>
</div>

The functionality of the parameters in the image above are:

- `wait time:` the duration of time (in milliseconds) between the onsets of the GSFP being triggered
- `density:` the number of "notes" or sound files to be triggered at the moment of an onset
- `offset:` the time variation (in milliseconds) between note onsets (ie., the onset of the GFSP triggers 5 sounds, they can all happen at once with a delta of 0 or be displaced in time from one another)
- `buffers:` the buffer names of sounds to use (folders of sounds can also be loaded with the keyword `sset`)
- `amp:` amplitude levels of sound file playback
- `attack time:` the duration of the envelope's attack (in milliseconds)
- `attack curve:` the slope or curve of the envelope's attack (in milliseconds (positive values give a logarithmic curve, negative values give an exponential curve, and zero gives a linear ramp)
- `release time:` the duration of the envelope's release (in milliseconds)
- `release curve:` same as attack curve but for the release of the sound
- `rate:` playback rate, where 1.0 is normal speed (0.5 is half speed, 2.0 is twice speed); specific keywords allow one to transpose in intervals (ie., 1 for minor 2nd higher, -12 for octave lower) or midicents (ie., 100 for minor second higher, -50 for quarter step lower, 1200 for octave higher)
- `start position:` the location within a given buffer from which to begin playback, where 0.0 is the beginning of the file and 1.0 is the end
- `pan:` the stereo location of the sound on a range from -1.0 to 1.0 (left to right)
- `out:` output channels that the given voice will be sent
  - for the moment, everything is reduced to a stereo image
  - however, the different output channels allows each voice to be separated into a stereo stem when a recording is made
  - using the recording controls in the upper right corner of the top row, set the number of channels you need in the number box (e.g., 16), press the toggle, and make sound

Inside the software there is a flexible and powerful custom abstraction called `the_patterner` that allows one to control each of these parameters through the use of special keywords. Keywords are followed by arguments (integers, floating point numbers, and symbols) that allow for variation and randomization of a given parameter. At the current moment there are several functioning keywords, below is a list of them and the way in which they can be implemented (optional arguments are given in &lt;these braces&gt;):

##### `range` &lt;distribution&gt; lo hi

- function: randomly outputs values within the given range
- arguments:
  - distribution:
    - white (default, equal probability within the range)
    - drunk <num steps> (random walk within range)
    - exp <slope> (exponential probability weighted towards upper values)
    - rexp <slope> (reverse exponential probability weighted towards lower values)
      - slope: greater than 1.0 = steeper slope
      - default slope = 2.0
  - lo / hi:
    - int1 int2
    - float1 float2

##### `sequence` or `seq` list

- function: continuously sequences the items given in a loop; currently only sequences in the item order but will soon include different sequence orderings
- arguments:
  - list: any list of ints/floats/symbols

##### `random` or `rand` list

- function: randomly selects from items within the list
- arguments:
  - list: any list of ints/floats/symbols

##### `urn` list

- function: randomly selects without repetitions from items within the list; once all have been chosen the list is reset
- arguments:
  - list: any list of ints/floats/symbols

##### `wrandom` or `wrand` [list][weights]

- function: randomly selects from the given list according to the given relative weights
- arguments:
  - brackets are required for the list and weights
  - list: any list of ints/floats/symbols
  - weights: list of ints/floats
    - weights are normalized to 1
    - both list and weights needs to be the same length

##### `move` or `moveloop` value1 value2 time

- function: move linearly between value1 and value2 over defined time
  - move stays a value2 when time is reached
  - moveloop cycles back to value1 once value2 has been reached
- arguments:
  - value1 and value2: can only be ints/floats
  - time: integer in milliseconds

##### `for` or `forloop` time keyword arguments &lt;then&gt; ...

- function: allows any of the above keywords to be used in sequence and combined
- arguments:
  - time: integer in milliseconds
  - keyword arguments: any keyword listed above (e.g., random, range, sequence) followed by its respective arguments
  - then: is an optional argument that allows a sequence of keywords
- examples:
  - `for` 5000 range 0.0 1.0 then 5000 range 10.0 100.0
    - means: for 5 seconds use floats within the range 0.0 to 1.0 then for 5 seconds use floats within the range 10.0 to 100.0
  - `forloop` 5000 range 0.0 1.0 then 5000 rand 1 2 3 4 5
    - means: loop continuously between 5 seconds of floats in the range 0.0 to 1.0 then 5 seconds of randomly selection from the integers 1 2 3 4 5

Check out videos of it below:

<video class="my-3" width="100%" height="100%" controls="controls">
  <source src="{{ site.baseurl }}/assets/video/gsfp-video-demonstration.mp4" type="video/mp4">
</video>

These next two have older interfaces but showcase different sounds:

<video class="my-3" width="100%" height="100%" controls="controls">
  <source src="{{ site.baseurl }}/assets/video/gsfp-video-demonstration2.mp4" type="video/mp4">
</video>

<video class="my-3" width="100%" height="100%" controls="controls">
  <source src="{{ site.baseurl }}/assets/video/gsfp-video-demonstration3.mp4" type="video/mp4">
</video>

<h2 class="mt-5 mb-3">Granular Synthesis</h2>

<img src="{{ site.baseurl }}/assets/img/granular-synthesis.png" class="img-fluid" alt="Screenshot of Granular Synth">

Granular synthesis is a powerful tool for sound design that I frequently use in my compositional work. This custom patch in Max/MSP is a creative tool for sound generation and also a pedagogical tool that I have given to students, allowing them to explore granular synthesis and all of its essential parameters through this interface.

The software:

- uses both synchronous and asynchronous granular synthesis
- can load 3 sound files (but it's arbitrary to increase that number)
- can randomly select from those files or use only one
- allows a wide range of grain rate and grain size (controlled via the XY slider in the center)
- allows for a variety of window shapes to be applied to grains
- gives controls for traversal rate through the sound file and transposition of it
- allows for recording the output in separate module (not pictured)

<div class="col-12 mb-4 text-center">
  <a href="#" class="btn btn-outline-secondary">Download</a>
</div>

<h2 class="mt-5 mb-3">Composition Tools</h2>

<img class="my-3" src="{{ site.baseurl }}/assets/img/comp-tools-sets.png" class="img-fluid" alt="Screenshot of Comp Tools">

<img class="my-3" src="{{ site.baseurl }}/assets/img/comp-tools-interval-cycles.png" class="img-fluid" alt="Screenshot of Interval Cycles">

I have built a number of set theory tools for composition and analysis, two of which are shown above. Most of the tools make extensive use of the [`bach`](http://http://www.bachproject.net/) externals for calculations and notation display.

In the first picture shown above, the interface takes a list of pitch-classes from which a number of useful characteristics are displayed:

- prime form, normal form, interval vector, and complement
- all transpositions, inversions, M, and MI operations
- common tones between these operations
- Robert Morris' set class inclusion table and all members included with a given set class

The second screenshot displays a tool for generating a sequence of interval cycle chords. The tool allows for up to four voices with independent interval cycle collections. The contour, starting pitch, octave location, and rotation of each voice can all be controlled. The sequence of chords can be auditioned, and further manipulated using any of the `bach.roll` notation display functions (including expanding/compressing duration and transposition).

<div class="col-12 mb-4 text-center">
  <a href="#" class="btn btn-outline-secondary">Download</a>
</div>
