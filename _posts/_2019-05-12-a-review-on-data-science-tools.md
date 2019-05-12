---
layout: post
title: 'A short review on data science tools'
author: "Patrick Michl"
license: "CC BY 4.0"
license-url: "https://creativecommons.org/licenses/by/4.0/"
image: "https://www.frootlab.org/images/back/robot.webp"
categories:
  - Corporate
tags:
  - AutoML
  - CAMP
  - Nemoa
---

**The prospects in data science about the AI Revolution can be overwhelming. But although the tension is palpable, an important stage of development still is missing: Intelligent tools.**

[![Data Science Tools](/images/posts/data-science-tools.png)](/images/posts/data-science-tools.png)

Whereas the scientific aspects of the AI Revolution are clearly entangled with [current advances in deep learning]({% post_url 2019-04-30-a-review-on-deep-learning %}), the jumble of data science tools and standards at a first glance seems to be completely cluttered. Fair enough to move through the thicket and get some orientation.

### The golden era of statistics software

Since the beginning of the programming age, the data science sector utilized classical statistics software like [SAS](https://www.sas.com/en_us/software/platform.html) and [SPSS](https://www.ibm.com/analytics/spss-statistics-software). Nevertheless, these "first generation" tools, provided some serious drawbacks that are deeply rooted in their structure.

One issue can be found in the very nature of data science: The more you already know (wise people call it "belief") about your data domain, the better your estimations can be. This simple Bayesian wisdom inevitably leads to a rapidly fragmentation of specialised approaches, that e.g. are used in Natural Language-, Speech- or Vision processing. Of course the rigid and closed structure of classical statistics software has not been able to keep up with this development forever.

### Community driven open-source software

The gap between willing contibutors and actual developers led to a counter-movement within the universities and the education sector towards democratisation and open structures. One of the first projects, that may be regarded as a "second generation" data science tool, is the statistics programming language [R](https://www.r-project.org), which is released as [free and open source software](https://en.wikipedia.org/wiki/Free_and_open-source_software). Another project, that heavily benefited from this movement was [Python](https://www.python.org/). Also Python is a multi-purpose programming language, it owes it's incredible popularity to a large portion to the libraries that have emerged within this movement, comprising [SciPy](https://scipy.org/), [Pandas](https://pandas.pydata.org/) and [Tensorflow](https://www.tensorflow.org/).

The AI revolution was acompanied by an increasing demand of data scientists. Thereby a further issue came apparent. The usage of statistics software, as well as R and Python, requires a strong mathematical background and high programming skills. On the other side a lot of people got interested in getting into this "[sexiest job of the 21st century](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century)", that never learned coding in school. So the question ariose, if and how data science tools could be used by specialists of different domains.

### From visual programming to AutoML

In the data science community statistics and software development are not only highly appreciated but indeed regarded as the primary must-have competences. Nevertheless, if you look beyond the horizon and focus on specific real-world problems, you will realise that the specialists knowledge is getting more important, the closer you get. So in order to close this gap, a further movement in data science evolved, that emphasizes user-friendly interfaces and visual programming. Tools like [KXEN (now SAP)](https://www.sap.com/germany/products/predictive-analytics.html) and [RapidMiner](https://rapidminer.com/) aim to open the area to non-programmers by obviating the code aspect and providing a user-friendly GUI.

This approach is awesome, since it purifies the workflow from any technical issues and therfore accelerates the whole development process. Compared to Python and R, however, the scope of application and adaptability is very limited. So once again we have a situation of competing concepts with distinctive strengts and once again the decisive step is their fusion! 

automating the end-to-end process of applying machine learning to real-world problems

[Explain what AutoML is]


However, the "third generation" is taking the decisive step with the concept of automated machine learning (AutoML).


###

a very important aspect so far remains tended to be hidden: Intelligent software development.




In a nutshell: The development- and exploration process in data science is
currently heavily impaired by the detour experienced by publications in paper
form. While it became easier and easier to publish,it became harder and harder
to get an overview. This is why we want to provide a better solution!

[Motley](/motley.html) is a smart algorithm repository server, that enforces
unified data interfaces for different algorithm categories. This allows Motley
not only to automatically evaluate and compare the hosted algorithms with
respect to given metrics but thereupon also to determine, which algorithm of a
given category and data domain is the currently best fitting ([CBF](/tags#CBF))
algorithm with respect to some metric. An example for such a metric would be the
average prediction accuracy within a fixed set of gold standard samples of the
respective domain of application (e.g. latin handwriting samples, spoken word
samples, TCGA gene expression data, etc.).

According to our [convictions](/corporate/2019/03/19/welcome-at-frootlab.html),
Motley is [free & open
source](https://www.gnu.org/philosophy/floss-and-foss.en.html), based on the
[Python](https://www.python.org/) programming language and actively developed as
part of our [Liquid Coding](https://github.com/orgs/frootlab/projects)
framework. For more information please visit
[GitHub](https://github.com/frootlab/motley).
