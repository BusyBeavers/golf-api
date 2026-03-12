# Golf Handicap Microservice

This mircoservice calculates the handicap index for a golfer based on their recent rounds. 

## What it does
- `POST /handicap` returns the handicap index for a golfer

## How to call

The body of this post request must be an array of rounds from a player. the number of rounds is limited to the last 20 chronologically. The minimum number of rounds to recieve a handicap is 3. 

The information needed for a round is the score (in total strokes), the par of the course, and the slope of the course. 

Each round must be in a JSON object and added to the array as an item. 

### example:
POST http://localhost:5888/handicap

Content-type: application/json

```json
{
    "rounds": [
        {"score": 100, "par": 72, "slope": 75},
        {"score": 110, "par": 72, "slope": 120},
        {"score": 90, "par": 70, "slope": 100},
        {"score": 105, "par": 72, "slope": 115},
        {"score": 100, "par": 72, "slope": 75}
    ]
}
```

**Response**
```json
{
  "Handicap": 22.599999999999998
}
```