---
title: Motley
subtitle: "Autoevaluating Algorithm Repository"
slogan: "Autoevaluating Algorithm Repository"
featured: true
category: "main"
popularity: 1
image-meta:
  cloudinary: "pexels/990824"
  orientation: "landscape"
figure:
  uri: /images/fig/motley.svg
backdrop: white
form-logo: "/images/svg/motley.svg"
permalink: /projects/motley.html
redirect_from: /motley.html
stage: Planning
version: 0.0.1
docs:
  - name: docs
    user: motley
  - name: readthedocs
    user: motley
    type: pdf
  - name: readthedocs
    user: motley
    type: epub
  - name: readthedocs
    user: motley
    type: zip
source:
  - name: github
    user: frootlab/motley
  - name: pypi
    user: motley
    type: project
---

**Motley** is a planed catalog server for algorithm storage and evaluation and
based on [GIT](https://git-scm.com/). Motley aims to serve as an algorithm
catalog to allow the usage of abstract **currently best fitting** (CBF)
algorithms, as required by the **Cloud-Assisted Meta Programming** (CAMP)
paradigm.

{% include article/figure.html url="/images/fig/motley.svg"
  description="Resolution of currently best fitting algorithms using a Motley cluster" %}

Thereby Motley is required to host and deliver algorithms as well as to
cyclically evaluate and index them with respect to their corresponding metrics,
using [Nemoa](https://github.com/frootlab/nemoa). An example for such a metric
would be the average prediction accuracy within a fixed set of gold standard
samples of the respective domain of application (e.g. latin handwriting samples,
spoken word samples, TCGA gene expression data, etc.). Consequently Motley is
also required to host or connect these samples by using
[Deet](https://github.com/frootlab/deet).

Due to this approach motley allows the implementation of smart analytics
projects, that are automatically kept up-to-date by a minimum of maintenance
costs. Also motley supports scientific applications, by facilitating a local
(workgroup, lab, institution) or global publication, application and evaluation
of algorithms.
