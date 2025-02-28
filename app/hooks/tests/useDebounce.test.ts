import { renderHook, act } from '@testing-library/react';
import useDebounce from '@/hooks/useDebounce';  

describe('useDebounce hook', () => {
  let callback = jest.fn();

  beforeEach(() => {
    callback = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('debounces the function and executes it after delay', () => {
    const delay = 500;
    const { result } = renderHook(() => useDebounce(callback, delay));

    const debouncedFn = result.current;

    debouncedFn();
    debouncedFn();
    debouncedFn();
    expect(callback).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(delay - 100);
    });
    expect(callback).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('executes the function immediately when immediate flag is true', () => {
    const delay = 300;
   
    const { result } = renderHook(() => useDebounce(callback, delay, true));

    const debouncedFn = result.current;
    
    debouncedFn();
    expect(callback).toHaveBeenCalledTimes(1);  
    debouncedFn();
    
    expect(callback).toHaveBeenCalledTimes(1);

    
    act(() => {
      jest.advanceTimersByTime(delay);
    });
   
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('cancels the debounced timeout on unmount', () => {
    const delay = 200;
    const { result, unmount } = renderHook(() => useDebounce(callback, delay));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const debouncedFn: any = result.current;
    debouncedFn();
    expect(callback).not.toHaveBeenCalled();  

    expect(typeof debouncedFn.cancel).toBe('function');  
    const cancelSpy = jest.spyOn(debouncedFn, 'cancel');

    unmount();

    expect(cancelSpy).toHaveBeenCalledTimes(1);

    act(() => {
      jest.runAllTimers();  
    });
    expect(callback).not.toHaveBeenCalled();
  });
});
