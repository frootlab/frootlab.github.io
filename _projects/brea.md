---
title: Vivid Store
subtitle: "Autoevaluating Algorithm Repository"
slogan: "Autoevaluating Algorithm Repository"
featured: true
category: "main"
popularity: 1
image-meta:
  cloudinary: "pexels/990824"
  orientation: "landscape"
figure:
  uri: /images/fig/brea.svg
backdrop: white
form-logo: "/images/svg/brea.svg"
permalink: /projects/brea.html
redirect_from:
  - /brea
  - /brea.html
  - /motley.html
  - /projects/motley.html
stage: Planning
version: 0.0.1
docs:
  - name: docs
    user: brea
  - name: readthedocs
    user: brea
    type: pdf
  - name: readthedocs
    user: brea
    type: epub
  - name: readthedocs
    user: brea
    type: zip
source:
  - name: github
    user: frootlab/brea
  - name: pypi
    user: vivid-store
    type: project
---

**Vivid Store** is a [Python](https://www.python.org/) based algorithm
repository with integrated evaluation and ranking. This allows the resolution of
abstract code requests by *Currently Best Fitting* algorithms, as required by
the *Cloud-Assisted Meta Programming* paradigm.

{% include article/figure.html url="/images/fig/brea.svg"
  description="Resolution of abstract code requests by currently best fitting
  algorithms, using a self contained cluster of multiple Vivid Stores" %}

The resolution mechanism of a Vivid Store is based on the comprehensive
evaluation and ranking of all hosted algorithms. This evaluation, which uses
[Vivid Node](/rian), is performed with respect to all evaluation metrices, that
are known to the store. Important examples for such metrices are the prediction
errors for fixed sets of gold standard samples of different data domain, like
latin handwriting samples, spoken word samples, TCGA gene expression data, etc.
Accordingly Vivid Stores use an universal data interface, implemented by [Vivid
DB](/deet).

This approach allows Vivid Stores to dynamically resolve abstract code requests
(AC-request), which only comprise (1) an algorithm category, (2) a data type and
(3) the applied evaluation metric. The response to an AC-Request is the offer of
the currently best fitting algorithm (CBF-offer). This step is important, as it
allows the client sided choice from multiply Vivid Stores and therefore
recursive AC-Request within a cluster of self contained Vivid Stores.
