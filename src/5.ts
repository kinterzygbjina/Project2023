
import numpy as np

def random_ts(size=100):
    """
    Generate a random time series with N = size observations.
    """
    np.random.seed(42)
    return np.sin(np.linspace(0, 3 * np.pi, size)) + np.random.normal(size=size, scale=0.1)