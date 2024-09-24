from PIL import Image
import os

# Define the desired width and height
desired_width = 1280  # Set this to the desired width
desired_height = 720  # Set this to the desired height

# Define input and output directories
input_dir = 'images/Slide 2 - behind the scenes'
output_dir = 'images/Slide 2 - behind the scenes-a'

# Create the output directory if it doesn't exist
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def scale_and_resize_with_padding(image, desired_width, desired_height):
    # Get original image dimensions
    original_width, original_height = image.size
    
    # Calculate the aspect ratio and resize the image to the desired width
    aspect_ratio = original_width / original_height
    target_width = desired_width
    target_height = int(target_width / aspect_ratio)
    
    # Resize the image to the target width while keeping aspect ratio
    resized_image = image.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # If the resized image height is greater than the desired height, scale down further
    if target_height > desired_height:
        target_height = desired_height
        target_width = int(target_height * aspect_ratio)
        resized_image = resized_image.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # Create a new image with the desired width and height, filled with white
    new_image = Image.new("RGB", (desired_width, desired_height), (255, 255, 255))
    
    # Calculate the position to paste the resized image (center it horizontally and vertically)
    paste_position = (
        (desired_width - target_width) // 2,  # Center the image horizontally (padding on left and right)
        (desired_height - target_height) // 2  # Center the image vertically (padding on top and bottom)
    )
    
    new_image.paste(resized_image, paste_position)
    
    return new_image

# Process each image in the input directory
for filename in os.listdir(input_dir):
    if filename.lower().endswith(('png', 'jpg', 'jpeg', 'gif', 'bmp')):
        with Image.open(os.path.join(input_dir, filename)) as img:
            # Scale the image to 1500px width and apply padding to match the height
            output_image = scale_and_resize_with_padding(img, desired_width, desired_height)
            
            # Save the output image to the output directory
            output_image.save(os.path.join(output_dir, filename))

print("Image processing complete.")