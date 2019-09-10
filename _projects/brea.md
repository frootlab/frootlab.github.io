---
title: Brea
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
    user: brea
    type: project
---

**Brea** is a code repository with integrated evaluation of algorithms. Brea is
based on the [Python](https://www.python.org/) programming language and actively
developed as the server component of the [Vivid Code](/vivid) framework.

{% include article/figure.html url="/images/fig/brea.svg"
  description="Resolution of currently best fitting algorithms using a Brea cluster" %}

The primary goal of Brea is to serve as an algorithm catalog to allow the usage
of abstract **currently best fitting** (CBF) algorithms, as required by the
**Cloud-Assisted Meta Programming** (CAMP) paradigm. Thereby Brea is required to
host and deliver algorithms as well as to cyclically evaluate and index them
with respect to their corresponding metrics, using
[Rian](https://github.com/frootlab/rian). An example for such a metric would be
the average prediction accuracy within a fixed set of gold standard samples of
the respective domain of application (e.g. latin handwriting samples, spoken
word samples, TCGA gene expression data, etc.). Consequently Brea is also
required to host or connect these samples by using
[Deet](https://github.com/frootlab/deet).

Due to this approach Brea allows the implementation of smart analytics
projects, that are automatically kept up-to-date by a minimum of maintenance
costs. Also Brea supports scientific applications, by facilitating a local
(workgroup, lab, institution) or global publication, application and evaluation
of algorithms.
