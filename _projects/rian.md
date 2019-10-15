---
title: Vivid Node
short-title: Node
subtitle: Smart Data Analysis Processor
slogan: Smart Data Analysis Processor
featured: true
category: "main"
popularity: 2
image-meta:
  cloudinary: pexels/101764
  orientation: landscape
figure:
  uri: /images/fig/rian.svg
backdrop: white
permalink: /projects/vivid/node.html
redirect_from:
  - /nemoa
  - /nemoa.html
  - /projects/nemoa.html
  - /rian
  - /rian.html
  - /projects/rian.html
stage: Alpha
version: 0.5.583
docs:
  - name: docs
    user: rian
  - name: readthedocs
    user: rian
    type: pdf
  - name: readthedocs
    user: rian
    type: epub
  - name: readthedocs
    user: rian
    type: zip
source:
  - name: github
    user: frootlab/rian
  - name: pypi
    user: vivid-node
    type: project
---

**Vivid Node** is a [Python](https://www.python.org/) based machine learning and
data analysis framework with rapid prototyping and cloud assisted building and
deployment. Thereby individual code blocks are automatically retrieved from
collaborative algorithm repositories, that provide the currently best fitting
solutions for individual tasks.

{% include site/figure.html url="/images/fig/rian.svg"
  description="Processing of data analysis flows using Vivid Node" %}

The key goal of Vivid Node is to provide a long-term data analysis framework, which
seemingly integrates into existing enterprise data environments and thereby
supports collaborative data science. To achieve this goal Vivid Node
orchestrates established Python frameworks like
[TensorFlow](https://www.tensorflow.org/) and
[SQLAlchemy](https://www.sqlalchemy.org/) and dynamically extends their
capabilities by community driven algorithms (e.g. for [probabilistic graphical
modeling](https://en.wikipedia.org/wiki/Graphical_model), [machine
learning](https://en.wikipedia.org/wiki/Machine_learning) and [structured
data-analysis](https://en.wikipedia.org/wiki/Structured_data_analysis_(statistics))).
