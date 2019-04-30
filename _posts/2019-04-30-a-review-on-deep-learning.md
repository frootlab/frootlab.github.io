---
layout: post
title: 'The AI Revolution: Deep Learning and what´s next?'
author: "Patrick Michl"
license: "CC BY 4.0"
license-url: "https://creativecommons.org/licenses/by/4.0/"
image: "https://www.frootlab.org/images/back/robot.webp"
categories:
  - Science
tags:
  - AI Revolution
  - Deep Learning
---

**When talking about the "AI Revolution" it's difficult to narrow down a common
denominator. This is not only because science fiction didn't prepare us for our
first real encounters with AI, but also due to it's multiple appearances.**

From the perspective of a data scientist, however, the AI Revolution can be
traced back to a comparably young branch of statistics: Deep Learning.
After about one decade of this new branch it's time to take stock of progress
and review some of the most important milestones and remaining challenges.

### The Big-Bang of Deep Learning

The advent of deep learning was Geoffrey Hinton's daredevil science article
"[Reducing the dimensionality of data with neural
networks](https://www.cs.toronto.edu/~hinton/science.pdf)" (Hinton et al 2006),
which can be summarized in two observations:

1. Certain undirected graphical models, termed Restricted Boltzmann Machines
(RBM), can efficiently be trained to represent data by maximizing their
likelihood.

2. These RBMs can be stacked together to "pre-train" deep neural networks (ANN),
which in a subsequent "fine-tuning" step generally attain better solutions then
without pre-training.

So, all you need is to collect enough data and thereupon you can predict
anything you want?! Of course, this idea hit like a bomb!

### Advance #1: Pre-Training with DBMs

Although Hinton's article definitively paved the way for deep ANNs, it did not
yield any explanation for the use of "pre-training", nor did it provide a
mathematical framework to describe it. Nevertheless a group about Yoshua Bengio
greatly improved Hinton's approach by welding the stack of RBMs into a single
Deep Boltzmann Machine (DBM).

Their article "[On Training Deep Boltzmann
Machines](https://arxiv.org/abs/1203.4416)" (Bengio et al 2012) provides a
gradient based update rule for the simultaneous effective training of stacked
RBMs and therefore avoids losses, caused by their stacking.

Apart of their empirically better results, however, DBMs provide an important
hint about the very nature of pre-training: DBMs generate the sample
distribution of the training data by maximizing the likelihood. This can be
imagined as the inflation of a manifold that clings to the data in terms of a
total least squares regression. Without pre-training, however, the ANNs only
perform an ordinary least squares regression, which heavily impairs their
generalizability.

### Advance #2: Adversarial training

> “Adversarial training is the coolest thing since sliced bread.” — Yann LeCun

A further obscurity in Hinton's approach was the succession of an undirected
graphical model, followed by a directed - and indeed that's the daredevil part!
Superficially the parameter spaces of both models may somehow seem comparably,
but they are not at all! In particular with respect to the different probability
distributions, they generate.

But how to solve this problem? Imagine two kids having to play with the same
toys: No wonder they always quarrel! A group about Ian Goodfellow provided a
fairly good solution: Every model get's it's own parameter space!

In their article "[Generative Adversarial
Nets](https://arxiv.org/pdf/1406.2661.pdf)" (Goodfellow et al 2014) they
proposed a modeling approach, where one ANN is trained to generate the sample
distribution of the training data, while another is trained to discriminate the
generated samples from the training data. Thereby the generative network tries
to increase the error rate of the discriminative network.

In this way, any subsequent fine tuning of individual parameters can already be
initialized in the same parameter space of the generative network. Another
important difference to maximum likelihood learning is that

### What will come next?
Currently we find ourselves surrounded by two contrary modeling approaches: The
DBM approach and the GAN approach.

DBMs are trained to provide an internal representation of the training data in
latent space, by preserving it's dependency structure. This stategy endows DBMs
with high generalizability, but also provides some downsides: Since the
likelihood gradient usually is not tractable it is estimated, ether by MCMC or
Variational Inference. Furthermore the translation of the DBM parameter space to
the ANN parameter space may provide additional issues.

In difference to DBMs, the generative network of GANs is trained exactly and can
seamlessly be used to initialize the parameter space of an ANN. Nevertheless, as
it does not preserve the dependency structure it loses in generalizability.

As both approaches show distinctive strengths, the question arises if and how
they can be combined for different use cases. First steps in this direction have
already been taken, e.g. "[Boltzmann Encoded Adversarial
Machines](http://physics.bu.edu/~pankajm/PY895/BEAM.pdf)" (Fisher et al 2018)
which impressively show, that there is a lot of potential.

Also the generic ability of DBMs to preserve dependency structures has only
hardly been exploited. This ability provides enormous potential for structural
inference and will definitively be one of the upcoming milestones in the
AI revolution.
