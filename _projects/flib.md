---
layout: project
navid: projects
title: flib
subtitle: Frootlab Shared Library
slogan: You are welcome to use our multi-purpose shared library
featured: false
popularity: 0
image:
  cloudinary: unsplash/602632
  orientation: landscape
illustration:
  cloudinary: undraw/undraw_code_typing_7jnv
sections: true
backdrop: white
permalink: /projects/flib.html
redirect_from: /flib.html
social:
  - name: github
    user: frootlab/flib
  - name: pypi
    user: flib
    type: project
readthedocs: flib
stage: Various
license: GPL-3.0
license-url: https://www.gnu.org/licenses/gpl.html
version: 0.9.2
---

The **frootlab shared library** (flib) is a multi-purpose
[Python](https://www.python.org/) library, which primarily aims to support
[Frootlab](https://www.frootlab.org) projects by serving as a common base
library. It was originally created in 2019 for the [Liquid
ML](https://github.com/orgs/frootlab/projects) framework to separate the primary
components [Pandora](/pandora), [Nemoa](/nemoa) and [Motley](/motley). The
majority of the provided modules, however, are kept generic to facilitate their
application beyond Frootlab projects as well.

**Generic Modules**

[Design Patterns](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.abc.html),
[Attributes and Attribute Groups](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.attrib.html),
[Binary Object Functions](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.binaryhtml),
[Callable Object Functions](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.call.html),
[Algorithms Organization](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.catalog.html),
[Type- and Value Checking](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.check.html),
[Environmental Integration](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.env.html),
[Literal Representation](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.literal.html),
[Mapping Object Functions](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.mapping.html),
[Functional Programming](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.operator.html),
[Object-Oriented Programming](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.otree.html),
[Multi-purpose Parser](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.parser.html),
[Phonetic Algorithms](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.phonetic.html),
[PackageTree Information](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.pkg.html),
[CallStack Information](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.stack.html),
[Structural Types](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.stype.html),
[Extended Unit-Testing](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.test.html),
[Multi-Threading](http://docs.frootlab.org/projects/flib/en/latest/api/flib.base.thread.html)

**IO Modules**

[IO Design Patterns](http://docs.frootlab.org/projects/flib/en/latest/api/flib.io.abc.html),
[Extended CSV-File IO](http://docs.frootlab.org/projects/flib/en/latest/api/flib.io.csv.html),
[Extended INI-File IO](http://docs.frootlab.org/projects/flib/en/latest/api/flib.io.ini.html),
[Extended Plain-Text-File IO](http://docs.frootlab.org/projects/flib/en/latest/api/flib.io.plain.html),
[Extended RAW-File IO](http://docs.frootlab.org/projects/flib/en/latest/api/flib.io.raw.html),
[Extended ZIP-Archive IO](http://docs.frootlab.org/projects/flib/en/latest/api/flib.io.zip.html),
