from getMetar import parser
from runwayDirections import runway_headings
from whichRunway import runway_picker


def cmd_input():
    airport = input()
    directory = input()

    print(output(airport, directory))


def output(arrival_airport, directory):
    wind_direction = parser(7, arrival_airport, "1")
    raw_metar = parser(0, arrival_airport, "1")
    wind_speed = parser(8, arrival_airport, "1")

    runway_directions = runway_headings(arrival_airport, directory)
    runway = runway_picker(runway_directions, wind_direction)

    return str(raw_metar) + "++" + str(wind_direction) + "++" + str(wind_speed) + "++" + str(len(runway_directions)) \
        + "++" + str(runway_directions) + "++" + str(runway)


cmd_input()
