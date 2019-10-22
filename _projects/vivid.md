---
title: Vivid Code
short-title: Vivid
subtitle: Automated collaborative data science
featured: true
category: super
popularity: 5
image-meta:
  cloudinary: pexels/67843
  orientation: landscape
figure:
  uri: /images/fig/vivid-code.svg
permalink: /projects/vivid/index.html
redirect_from:
  - /liquid.html
  - /liquid/index.html
  - /projects/liquid.html
  - /vivid.html
  - /vivid/index.html
  - /projects/vivid.html
subprojects:
  - Vivid DB
  - Vivid Node
  - Vivid Store
  - Vivid Root
---

**Vivid Code** is a pioneering software framework for next generation data
analysis applications, that interconnects collaborative data science with
automated machine learning.

{% include site/figure.html url="/images/fig/vivid-code-collaboration.svg"
  description="Vivid Code facilitates collaborations by integrating machine
  intelligence" %}

The Vivid Code framework implements a new programming paradigm, that shapes it's
design: **cloud-assisted meta programming**. The rough idea behind this paradigm
is to replace frequently used code elements by best practices, that are
hosted within a federated cloud. Whereas the development and advance of these
code elements is subject to collaborative achievements, their evaluation is
automatically performed by using machine intelligence. This provides significant
advantages, in particular for data science:

* The dynamic replacement of code elements by **currently best fitting**
  algorithms automatically keeps data analysis applications state-of-the-art
  while reducing their TCO
* The separation of program flow and algorithms allows them to be developed and
  maintained by different expert groups
* The interconnection of smart algorithm repositories to information clusters
  allows data science collaborations at an entirely new level

### How does it work?

At the beginning is [Vivid Node](/projects/rian.html), a data analysis
framework, that orchestrates standard libraries like TensorFlow / Keras. On
their top Vivid Node allows the definition of program flows, that use explicit
or abstract algorithms. Before code interpretation and compilation, the abstract
algorithms are substituted by currently best fitting algorithms, that are
automatically obtained from algorithm repositories.

These repositories are implemented with [Vivid Store](/projects/brea.html), that
automates the evaluation of algorithms as well as their deployment to Nodes.
Thereby any Node can be connected to one or many Stores and the access to the
Stores can be restricted to authorized Users / Nodes. On this basis Stores can
be configured to exchange algorithms, either unidirectional or bidirectional,
depending on the respective peering agreement between the collaboration
partners.

A fundamental requirement for such an automated algorithm management is the
usage of a unified data interface. For this reason Vivid Node and Vivid Store
use a universal data mapper, given by [Vivid DB](/projects/deet.html). This
allows collaboration partners to automatically share algorithms without the need
to share data. Together these three components constitute Vivid Code.
