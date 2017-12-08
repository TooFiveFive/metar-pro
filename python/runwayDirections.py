import json


def runway_headings(airport, directory):
    file = open(directory + 'runways.json').read()
    json_file = json.loads(file)

    array_of_runway_headings = []

    for child in json_file:
        if child['airport_ident'] == airport:
            array_of_runway_headings.append(child['he_heading_degT'])

    for runway in array_of_runway_headings:
        if isinstance(runway, str):
            array_of_runway_headings.remove(runway)

    return array_of_runway_headings


