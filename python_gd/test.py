from ursina import *

app = Ursina()

player = Entity(model='cube', color=color.orange, scale=(2, 2, 2))
ground = Entity(model='plane', color=color.green, scale=(10, 1, 10), position=(0, -1, 0))

def update():
    if held_keys['left arrow']:
        player.x -= 0.1
    if held_keys['right arrow']:
        player.x += 0.1
    if held_keys['up arrow']:
        player.y += 0.1
    if held_keys['down arrow']:
        player.y -= 0.1

    if held_keys['space']:
        player.y += 0.3  # Simple jump

app.run()
