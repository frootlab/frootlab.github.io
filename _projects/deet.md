---
title: Vivid DB
short-title: DB
subtitle: Universal Data Mapper
featured: true
category: main
popularity: 3
image-meta:
  cloudinary: pexels/366691
  orientation: landscape
figure:
  uri: /images/fig/vivid-db.svg
backdrop: white
permalink: /projects/vivid/db.html
redirect_from:
  - /pandora
  - /pandora.html
  - /projects/pandora.html
  - /deet
  - /deet.html
  - /projects/deet.html
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
    user: vivid-db
    type: project
---

**Vivid DB** is a [Python](https://www.python.org/) based universal data mapper
and SQL-Database engine, that implements high-performance and security
requirements for large-scale data analysis applications. The primary goal of
Vivid DB is to separate data integration and data analysis into independent
tasks.

{% include site/figure.html url="/images/fig/vivid-db.svg"
  description="Vivid DB unifies various data sources into a common data
  interface" %}

To achieve this goal, Vivid DB implements the two fundamental layers of a data
warehouse, the integration layer and the staging layer, as well as an
intermediate smart cache.

The *integration layer* utilizes [SQLAlchemy](https://www.sqlalchemy.org) to
allow it\'s connection to a variety of SQL-Databases (e.g. IBM DB2, Oracle, SAP,
MS-SQL, MS-Access, Firebird, Sybase, MySQL, Postgresql, SQLite, etc.). Thereupon
it provides native support for flat file databases (e.g. CSV-Tables, R-Table
exports), laboratory measurements and data generators.

The *staging layer* is implemented as a native SQL-Database engine, featuring a
DB-API 2.0 interface with full SQL:2016 support, a vertical data storage manager
and real-time encryption. This allows the data analysis application to integrate
a variety of different data sources, by using a unified data interface (and SQL
dialect).
