---
title: Vivid Code
subtitle: "Automated collaborative data science"
slogan: "Create smart software"
featured: true
category: "super"
popularity: 5
image-meta:
  cloudinary: pexels/67843
  orientation: landscape
figure:
  uri: /images/fig/vivid.svg
backdrop: white
permalink: /projects/vivid.html
redirect_from:
  - /vivid
  - /vivid.html
  - /liquid.html
  - /projects/liquid.html
subprojects:
  - Vivid DB
  - Vivid Node
  - Vivid Store
---

**Vivid Code** is a pioneering software framework for next generation data
analysis applications, that interconnects collaborative data science with
automated machine learning.

{% include site/figure.html url="/images/fig/vivid.svg"
  description="Cloud-Assisted Meta programming in the Vivid Code framework" %}

Based on the **Cloud-Assisted Meta programming** (CAMP) paradigm, the framework
allows the usage of **Currently Best Fitting** (CBF) algorithms, that are
specified by an algorithm category, a data domain and an evaluation metric.
Examples for such metrices include average prediction accuracies for gold
standard samples of the data domain (e.g. latin handwriting samples, spoken word
samples, TCGA gene expression data, etc.).

Before code interpretation and compilation the CBF algorithms are respectively
requested from servers which immediately involves two components: A
requesting client and an answering server, respectively given by [Vivid
Node](/projects/rian.html) and [Vivid Store](/projects/brea.html).
Thereby a Vivid Node instance communicates with one or many connected Vivid
Store instances. The communication is initiated with an `EVALUATION REQUEST` for
any connected Vivid Store. This request comprises (R1) an Algorithm Category,
(R2) the used Data Type and (R3) the applied Evaluation Metric. Thereupon the
connected Vivid Stores respectively use their evaluation lookup tables to
respond to this request with an `CODE OFFER`. This includes the above given
information, as well as (O1) an Evaluation Score and (O2) an Algorithm ID, which
identifies the algorithm within the Store. The collection of all offers received
by Vivid Node within a pre-defined time window are ranked by their evaluation
scores.

Thereupon the highest ranked code offers are looked up in a local
algorithm cache, by using the combination of the domain name of the store and
the algorithm id. If this combination, however, could not be found, Vivid Node
creates a `CODE REQUEST` to the respective store, which includes the algorithm
id and a cryptographic token, that identifies the user. Finally, the transaction
is finished, when the store responds to the code request with a `CODE ANSWER`.
This answer depends on the authorization of the user: If the user is unknown or
not allowed to receive the algorithm, the answer is constituted by (A1) the
Algorithm ID and a respective (A2) Error Notification Flag. If the user, however
is authorized the error flag is empty and the answer also comprises (A3) the
encoded algorithm.

The above description, however, conceals one essential detail that is necessary
to share code between different organizations: For any instance and any
collaboration partner, the algorithms of a given category are required to use
the same data interface to be interchangeable! At this point, Vivid DB as a
universal data mapper joins the team. Vivid Nodes as well as Vivid Stores use
[Vivid DB](/projects/brea.html) to connect to data sources. This allows
collaborating organizations to share (or to offer) algorithms and code without
the need to share data! Together the three components constitute the
**Vivid Code** framework.

The Vivid Code framework allows the implementation of cutting edge enterprise
analytical applications, that are automatically kept up-to-date and therefore
**minimize their maintenance costs**. Also the Vivid Code framework facilitates
the publication, application, sharing and comparison of algorithms, within and
between workgroups.
