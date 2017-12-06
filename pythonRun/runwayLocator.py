import json


def runway_lat_long(need_index, index, airport):
    file = open('runways.json').read()
    json_file = json.loads(file)
    array_of_runway_headings = []
    he_array_of_runway_lat = []
    he_array_of_runway_long = []
    le_array_of_runway_lat = []
    le_array_of_runway_long = []

    if need_index == 1:

        for child in json_file:
            if child['airport_ident'] == airport:
                array_of_runway_headings.append(child['he_heading_degT'])

        for child in json_file:
            if child['airport_ident'] == airport:
                he_array_of_runway_lat.append(child['he_latitude_deg'])
                le_array_of_runway_lat.append(child['le_latitude_deg'])
                he_array_of_runway_long.append(child['he_longitude_deg'])
                le_array_of_runway_long.append(child['le_longitude_deg'])

        for x in range(0, len(array_of_runway_headings)):
            if isinstance(array_of_runway_headings[x], str):
                he_array_of_runway_lat.remove(he_array_of_runway_lat[x])
                he_array_of_runway_long.remove(he_array_of_runway_long[x])

    if need_index == 0:

        for child in json_file:

            index = 0

            if child['airport_ident'] == airport:
                he_array_of_runway_lat.append(child['he_latitude_deg'])
                le_array_of_runway_lat.append(child['le_latitude_deg'])
                he_array_of_runway_long.append(child['he_longitude_deg'])
                le_array_of_runway_long.append(child['le_longitude_deg'])

    return [[he_array_of_runway_lat[index], he_array_of_runway_long[index]],
            [le_array_of_runway_lat[index], le_array_of_runway_long[index]]]
