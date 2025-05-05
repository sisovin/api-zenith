from flask import request, jsonify

def get_api_version():
    """Extract the API version from the request URL.

    This function parses the request URL to extract the API version
    specified in the URL prefix.

    Returns:
        str: The API version extracted from the URL prefix.
    """
    version_prefix = request.path.split('/')[1]
    return version_prefix

def versioned_response(data, version):
    """Create a versioned response with the specified data and version.

    This function creates a JSON response with the specified data and
    includes the API version in the response headers.

    Args:
        data (dict): The data to include in the response.
        version (str): The API version to include in the response headers.

    Returns:
        Response: The JSON response with the specified data and version.
    """
    response = jsonify(data)
    response.headers['API-Version'] = version
    return response
