from getMetar import parser
from runwayDirections import runway_headings
from timeCalculator import time
from whichRunway import runway_picker
from runwayLocator import runway_lat_long


def cmd_input():
    airport = input()

    print(output(airport))


def output(arrival_airport):
    runway_directions = runway_headings(arrival_airport)
    # remember to check if ints exists

    hours_ahead = str(time())

    wind_direction = parser(7, arrival_airport, hours_ahead)

    runway_index = runway_picker(runway_directions, wind_direction)

    runway_reference_arrival = runway_lat_long(1, runway_index, arrival_airport)

    # runway_reference_departure = runway_lat_long(0, runway_index, departure_airport)

    # value = which_side(runway_reference_arrival, runway_reference_departure)

    return runway_reference_arrival

    # value= [start[lat,long],end[lat,long]]


'''def which_side(runway_reference_arrival, runway_reference_departure):
    differences = []

    for x in range(0, 2):
        differences.append(abs(runway_reference_arrival[x][0] - runway_reference_departure[0][0]))
        differences.append(abs(runway_reference_arrival[x][1] - runway_reference_departure[0][1]))

    if abs(differences[0] - differences[2]) < abs(differences[1] - differences[3]):
        closest = 0
    else:
        closest = 1

    if closest == 1:
        runway_reference_arrival = [runway_reference_arrival[i] for i in [1, 0]]

    return runway_reference_arrival'''
cmd_input()
# from cmd python -c "import base; print(base.output('EICK', 'Dec 5 2017  1:33PM'))"
