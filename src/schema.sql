-- This file is licenced CC0 http://creativecommons.org/publicdomain/zero/1.0/

CREATE TABLE sw_consumption_lga (
    "code" asgs_2011.lga_code PRIMARY KEY,
    "consumption_2012" integer,
    "consumption_2013" integer,
    "lga_name" text,
    "sw_name" text
);

