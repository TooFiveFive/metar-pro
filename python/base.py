from getMetar import parser
from runwayDirections import runway_headings
from timeCalculator import time
from whichRunway import runway_picker
from runwayLocator import runway_lat_long


def output(arrival_airport, flight_time):

    runway_directions = runway_headings(arrival_airport)
    # remember to check if ints exists

    hours_ahead = str(time(flight_time))

    wind_direction = parser(8, arrival_airport, hours_ahead)

    runway_index = runway_picker(runway_directions, wind_direction)

    runway_reference_arrival = runway_lat_long(1, runway_index, arrival_airport)

    return [runway_reference_arrival]


print(output("EICK", "Dec 5 2017  1:33PM"))
