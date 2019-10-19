---
title: Vivid Store
short-title: Store
subtitle: Smart Algorithm Repository
featured: true
category: main
popularity: 1
image-meta:
  cloudinary: pexels/990824
  orientation: landscape
figure:
  uri: /images/fig/vivid-store.svg
backdrop: white
permalink: /projects/vivid/store.html
redirect_from:
  - /motley
  - /motley.html
  - /projects/motley.html
  - /brea
  - /brea.html
  - /projects/brea.html
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

{% include site/figure.html url="/images/fig/vivid-store.svg"
  description="Resolution of abstract code requests by currently best fitting
  algorithms, using a self contained cluster of multiple Vivid Stores" %}

The resolution mechanism of a Vivid Store is based on the comprehensive
evaluation and ranking of all hosted algorithms. This evaluation, which uses an
integrated [Vivid Node](/projects/rian.html), is performed with respect to all
evaluation metrices, that are known to the store and cached in corresponding
evaluation lookup tables. Important examples for evaluation metrices are the
prediction errors for fixed sets of gold standard samples of different data
domain, like latin handwriting samples, spoken word samples, TCGA gene
expression data, etc. Accordingly Vivid Stores use an universal data interface,
implemented by [Vivid DB](/projects/deet.html).

The communication usually is initiated with an `EVALUATION REQUEST` to a Vivid
Store. This request comprises (E1) an Algorithm Category, (E2) the used Data
Domain and (E3) the applied Evaluation Metric. Thereupon the Vivid Store uses
it's evaluation lookup tables to respond to this request with an `CODE OFFER`,
that includes the above given information, as well as (O1) an Evaluation Score
and (O2) an Algorithm ID. If the offer is accepted the Vivid Store receives a
`CODE REQUEST`, including (C1) the Algorithm ID and (C2) a Cryptographic Token,
that identifies the user. Finally, the transaction is finished, when the store
responds to the code request with a `CODE ANSWER`. This answer depends on the
authorization of the user: If the user is unknown or not allowed to receive the
algorithm, the answer is constituted by (A1) the Algorithm ID and (A2) a
respective Error Notification Flag. If the user, however is authorized the error
flag is empty and the answer also comprises (A3) the encoded algorithm.

This approach allows Vivid Stores to dynamically resolve requests for
*Currently Best Fitting* algorithms. Thereupon the separation between evaluation
requests and code requests using user authorizations allow collaborations at
an entirely new level: Cluster of self contained Vivid Stores.
