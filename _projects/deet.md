---
title: Deet
subtitle: Universal high-performance Data Mapper
slogan: Universal high-performance Data Mapper for high interoperability
featured: true
category: "main"
popularity: 3
image-meta:
  cloudinary: pexels/366691
  orientation: landscape
figure:
  uri: /images/fig/deet.svg
backdrop: white
form-logo: /images/svg/deet.svg
permalink: /projects/deet.html
redirect_from:
  - /deet.html
  - /pandora.html
  - /projects/pandora.html
stage: Pre-Alpha
version: 0.1.11
docs:
  - name: docs
    user: deet
  - name: readthedocs
    user: deet
    type: pdf
  - name: readthedocs
    user: deet
    type: epub
  - name: readthedocs
    user: deet
    type: zip
source:
  - name: github
    user: frootlab/deet
  - name: pypi
    user: deet
    type: project
---

**Deet** is a universal data mapper and SQL-Database engine, that implements
high-performance and security requirements for large-scale data analysis
applications. Deet is based on the [Python](https://www.python.org/) programming
language and actively developed as the database component of the [Vivid
Code](/vivid) framework.

{% include article/figure.html url="/images/fig/deet.svg"
  description="Deet unifies various data sources into a common data interface" %}

The primary goal of Deet is to separate data integration and data analysis
into independent tasks, by providing a universal data interface for machine
learning- and data analysis applications. To achieve this goal, Deet
implements the two fundamental layers of a data warehouse:

The **integration layer** of Deet utilizes
[SQLAlchemy](https://www.sqlalchemy.org) to allow it\'s connection to a variety
of SQL-Databases (e.g. IBM DB2, Oracle, SAP, MS-SQL, MS-Access, Firebird,
Sybase, MySQL, Postgresql, SQLite, etc.). Thereupon it provides native support
for flat file databases (e.g. CSV-Tables, R-Table exports), laboratory
measurements and data generators.

The **staging layer** of Deet is implemented as a native SQL-Database engine,
featuring a DB-API 2.0 interface with full SQL:2016 support, a vertical data
storage manager and real-time encryption. This allows the data analysis
application to integrate a variety of different data sources, by using a unified
data interface (and SQL dialect).
