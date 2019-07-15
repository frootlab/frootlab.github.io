---
layout: project
navid: projects
title: Pandora
subtitle: High Performance Data Proxy
slogan: Equip your existing data applications with a universal data plug
featured: true
popularity: 3
image:
  cloudinary: pexels/366691
  orientation: landscape
illustration:
  cloudinary: undraw/undraw_server_status_ocean
backdrop: white
sections: true
form-logo: /images/svg/pandora.svg
permalink: /projects/pandora.html
redirect_from: /pandora.html
social:
  - name: github
    user: frootlab/pandora
  - name: pypi
    user: pandb
    type: project
readthedocs: pandora
stage: Pre-Alpha
license: GPL-3.0
license-url: https://www.gnu.org/licenses/gpl.html
version: 0.1.10
---

**Pandora** is a universal database proxy and SQL-Database engine, that
implements high-performance and security requirements for large-scale enterprise
analytical applications. Pandora is based on the
[Python](https://www.python.org/) programming language and actively developed as
part of the [Liquid ML](https://github.com/orgs/frootlab/projects) framework.

The primary goal of Pandora is to separate data integration and data analysis
into independent tasks, by providing a unified (universal) data interface for
machine learning- and data analysis applications. To achieve this goal, Pandora
implements the two fundamental layers of a data warehouse:

The **integration layer** of Pandora utilizes
[SQLAlchemy](https://www.sqlalchemy.org) to allow it\'s connection to a variety
of SQL-Databases (e.g. IBM DB2, Oracle, SAP, MS-SQL, MS-Access, Firebird,
Sybase, MySQL, Postgresql, SQLite, etc.). Thereupon it provides native support
for flat file databases (e.g. CSV-Tables, R-Table exports), laboratory
measurements and data generators.

The **staging layer** of Pandora is implemented as a native SQL-Database engine,
featuring a DB-API 2.0 interface with full SQL:2016 support, a vertical data
storage manager and real-time encryption. This allows the data analysis
application to integrate a variety of different data sources, by using a unified
data interface (and SQL dialect).
