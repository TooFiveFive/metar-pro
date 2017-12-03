from datetime import datetime


def time(flight):
    start_time = datetime.now()
    flight_time = datetime.strptime(flight, '%b %d %Y %I:%M%p')
    hours_difference = abs(start_time - flight_time).total_seconds() / 3600.0

    return int(hours_difference)


# flight variable example: 'Jun 1 2005  1:33PM'
