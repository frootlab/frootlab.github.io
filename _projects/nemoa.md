---
title: Nemoa
subtitle: Rapid Prototyping System for Data Analysis
slogan: High Performance Data Analysis Processor
featured: true
category: "main"
popularity: 2
image-meta:
  cloudinary: pexels/101764
  orientation: landscape
figure:
  uri: /images/fig/nemoa.svg
backdrop: white
form-logo: /images/svg/nemoa.svg
permalink: /projects/nemoa.html
redirect_from: /nemoa.html
stage: Alpha
version: 0.5.582
docs:
  - name: docs
    user: nemoa
  - name: readthedocs
    user: nemoa
    type: pdf
  - name: readthedocs
    user: nemoa
    type: epub
  - name: readthedocs
    user: nemoa
    type: zip
source:
  - name: github
    user: frootlab/nemoa
  - name: pypi
    user: nemoa
    type: project
---

**Nemoa** is a machine learning and data analysis framework with rapid
prototyping and cloud assisted building and deployment. Thereby individual
code blocks are automatically retrieved from collaborative algorithm
repositories, that provide the currently best fitting solutions for individual
tasks. Nemoa is based on the [Python](https://www.python.org/) programming
language and actively developed as part of the [Liquid Code](/liquid) framework.

{% include article/figure.html url="/images/fig/nemoa.svg"
  description="Processing of data analysis flows using Nemoa" %}

The key goal of nemoa is to provide a long-term data analysis framework, which
seemingly integrates into existing enterprise data environments and thereby
supports collaborative data science. To achieve this goal nemoa orchestrates
established Python frameworks like [TensorFlow](https://www.tensorflow.org/)
and [SQLAlchemy](https://www.sqlalchemy.org/) and dynamically extends their
capabilities by community driven algorithms (e.g. for [probabilistic graphical
modeling](https://en.wikipedia.org/wiki/Graphical_model), [machine
learning](https://en.wikipedia.org/wiki/Machine_learning) and [structured
data-analysis](https://en.wikipedia.org/wiki/Structured_data_analysis_(statistics))).
