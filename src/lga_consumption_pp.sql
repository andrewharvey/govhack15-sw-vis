 -- This file is licenced CC0 http://creativecommons.org/publicdomain/zero/1.0/

CREATE VIEW lga_consumption_pp AS (
SELECT
    sw.*,
    persons.persons,
    sw.consumption_2013::float8 / persons.persons cpp_2013,
    sw.consumption_2012::float8 / persons.persons cpp_2012,
    lga.geom
FROM
    asgs_2011.lga lga
    INNER JOIN
        sw_consumption_lga sw
    ON
        lga.code = sw.code
    INNER JOIN
    (
        SELECT
            asgs_code,
            sum(persons) persons
        FROM
            census_2011.bcp_age_lga
        GROUP BY
            asgs_code
    ) AS persons
    ON lga.code = persons.asgs_code
);
