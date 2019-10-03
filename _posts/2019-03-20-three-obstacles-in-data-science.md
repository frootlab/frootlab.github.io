---
title: Three obstacles in data science and one vision
author: Patrick Michl
category: corporate
image-meta:
  cloudinary: pexels/67843
  orientation: landscape
pdf: files/posts/2019-03-20-three-obstacles-in-data-science.pdf
tags: [Vivid Store, Vivid Node, Vivid DB, Vivid Code]
---

**For the current development- and exploration process in data science three
obstacles in particular appear as outstanding hurdles, when it comes up to
realize projects - and even more, when it comes up to venture collaborations.**

<!--more-->

Some years ago - in the early 2010s - when Google's
[TensorFlow](https://www.tensorflow.org/) still was only an idea and Geoffrey
Hinton's daredevil [Science
Article](https://www.cs.toronto.edu/~hinton/science.pdf) still only received a
bunch of citations, the undisputed technical issues in data science were the
absence of computing power and the absence of a common play ground. Of course,
during the last decade, NVIDIA and Google respectively stepped into the breach
with [CUDA](https://developer.nvidia.com/cuda-zone) and TensorFlow / Keras. So
the question arises "What are today's foremost technical obstacles in data
science?".

## \#1: The Plug Jumble

Data scientists are concerned with the analysis of statistical samples. A large
part of the resources, however, often falls on the integration and mapping of
data sources into appropriate data analysis formats. Moreover this task
frequently turns out as an unappreciated and frustrating job, that neither
belongs to system administration nor to data science. In particular for
collaborations with different or changing operational data landscapes, the
additional efforts can become a permanent and critical factor, that impedes the
advance of projects.

{% include site/figure.html url="/images/fig/deet.svg"
  description="Vivid DB unifies various data sources into a common data
  interface" %}

We want to solve this issue with [Vivid DB](/projects/deet.html), a universal
data mapper, that mediates between data analysis and data sources. On the data
analysis side, Vivid DB supports many de-facto standards like
[NumPy-Arrays](http://www.numpy.org/) and
[R-Tables](https://www.r-project.org/). On the backend-side Vivid DB aims
to support a large variety of different data sources that appear in the wild.
This comprises a broad selection of SQL-Databases
([IBM Db2](https://www.ibm.com/analytics/us/en/db2/),
[Oracle Database](https://www.oracle.com/database/),
[SAP HANA](https://www.sap.com/products/hana.html),
[Microsoft SQL](https://www.microsoft.com/sql-server),
[MySQL](https://www.mysql.com),
[Postgresql](https://www.postgresql.org/), ...), assorted NoSQL Databases,
flat-file-Databases like CSV and R-Table exports, as well as assorted laboratory
measurement devices.

## \#2: Paper Bottlenecks

The development- and exploration process in data science heavily depends on the
ability to adapt current cutting-edge approaches. This ability, however,
frequently is impaired by the detour experienced by publications in paper form:
Due to the limited space, the provided pseudo code often loses valuable details
over the original algorithm. But also if the original algorithm is provided
online, it can take tremendous efforts to properly identify it's scope and adapt
it to the underlying prerequisites - only to decide about it's suitability!

{% include site/figure.html url="/images/fig/brea.svg"
  description="Resolution of abstract code requests by currently best fitting
  algorithms, using a self contained cluster of multiple Vivid Stores" %}

Our approach to this obstacle is [Vivid Store](/projects/brea.html) - a smart
algorithm repository, which enforces unified interfaces for different algorithm
categories. This allows an automatically evaluation and comparison of the hosted
algorithms with respect to different applied data types and evaluation metrices.
On this basis Vivid Store is able to determine currently best fitting algorithms
with respect to the algorithm category, the used data type and the evaluation
metric. This information is stored in evaluation tables, that can be requested
by clients and other Vivid Stores. This makes it possible, to interconnect the
individual stores of different organizations and therefore to provide an
entirely new level of collaboration!

## \#3: Riding Dead Horses

Due to the rapid advances in data science data analysis applications like in no
other domain suffer of short code lifetimes. This follows from the simple rule,
that products only survive as long as they remain competitive. And once the
zenith has been reached, the law of happy hunting grounds applies:
> When you're riding a dead horse, the best strategy is to get off!
>
> Wisdom of the Dakota Indians

So the question arises, how data analysis projects can be kept competitive
without the permanent binding of valuable resources!?

{% include site/figure.html url="/images/fig/rian.svg"
  description="Processing of data analysis flows using Vivid Node" %}

Our answer to this issue is the rapid prototyping system [Vivid
Node](/projects/rian.html), which separates the program flow of data analysis
applications from their used algorithms. However, Vivid Node is not only a rapid
prototyping system, but indeed takes the idea a large step beyond, by the
integration of cloud-based automatic algorithm and model selection. The
fundamental observation behind this approach is, that it is almost never
required to use a specific algorithm or model but only one that does the job -
so why not simply use the best one, that's currently available?

## The Vision: Vivid Code

In order to use currently best fitting algorithms any Vivid Node instance
communicates with one or many connected Vivid Store instances. The communication
is initiated with an `EVALUATION REQUEST` for any connected Vivid Store. This
request comprises (E1) an Algorithm Category, (E2) the used Data Type and (E3)
the applied Evaluation Metric. Thereupon the connected Vivid Stores respectively
use their evaluation lookup tables to respond to this request with an `CODE
OFFER`. This includes the above given information, as well as (O1) an Evaluation
Score and (O2) an Algorithm ID, which identifies the algorithm within the Store.
The collection of all offers received by Vivid Node within a pre-defined time
window are ranked by their evaluation scores.

Thereupon the highest ranked code offers are looked up in a local algorithm
cache, by using the combination of the domain name of the store and the
algorithm id. If this combination, however, could not be found, Vivid Node
creates a `CODE REQUEST` to the respective store, which includes (C1) the
Algorithm ID and (C2) a cryptographic token, that identifies the user. Finally,
the transaction is finished, when the store responds to the code request with a
`CODE ANSWER`. This answer depends on the authorization of the user: If the user
is unknown or not allowed to receive the algorithm, the answer is constituted by
(A1) the Algorithm ID and a respective (A2) Error Notification Flag. If the
user, however is authorized the error flag is empty and the answer also
comprises (A3) the encoded algorithm.

At this point the idea of "*currently best fitting*" should be quite clear. The
above description, however, conceals one essential detail that is necessary
to share code between different organizations: For any instance and any
collaboration partner, the algorithms of a given category are required to
use the same data interface to be interchangeable! At this point, Vivid DB
as a universal data mapper joins the team. Vivid Nodes as well as Vivid Stores
use Vivid DB to connect to data sources. This allows collaborating organizations
to share (or to offer) algorithms and code without the need to share data!
Together the three components constitute the **Vivid Code** framework.

## Chances and Applications

For enterprises the incorporation of customer and market information is getting
more important. Consequently many enterprises extend their analytical tools in
market research and decision support by business intelligence software.
Usually, there are two options for the implementation of such projects: In house
development and outsourcing by consultants. On closer perspective, however, it
becomes apparent that both approaches share a common weakness of individual
software: The high TCO. The Vivid Code framework provides a third option
by minimizing the TCO through the synergy effects of automated collaborative
data science. This allows to minimize the TCO of data analysis projects while
keeping them state-of-the-art.

{% include site/figure.html url="/images/fig/vivid-collaboration.svg"
  description="Collaboration between different organizations using the Vivid
  Code framework" %}

As a data scientist imagine the following situation: The new postgraduate in
your workgroup just released a gradient descent that outperforms the one you
wrote some years ago by far. The bad news, however, is that nearly any single
application in your lab uses your old algorithm. So the basic benefits of the
Vivid Code framework in this situation should be quite clear: All your
application automatically use the new algorithm. But now, let's get one step
beyond and imagine that your workgroup is interconnected with the algorithm
catalogs of many other workgroups... To be quite honest: Personally this
picture gives me the creeps.
