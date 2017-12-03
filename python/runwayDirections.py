import json


def runway_headings(airport):
    file = open('db/runways.json').read()
    json_file = json.loads(file)

    array_of_runway_headings = []

    for child in json_file:
        if child['airport_ident'] == airport:
            array_of_runway_headings.append(child['le_heading_degT'])

    return array_of_runway_headings


